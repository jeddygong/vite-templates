import { isString } from '@vmejs/shared';

export const DEVICES = [
  {
    regs: [
      /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
      /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
      /samsung[- ]([-\w]+)/i,
      /sec-(sgh\w+)/i,
    ],
    vendor: 'Samsung',
  },
  {
    regs: [
      /\((ip(?:hone|od)[\w ]*);/i,
      /\((ipad);[-\w\),; ]+apple/i,
      /applecoremedia\/[\w\.]+ \((ipad)/i,
      /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
    ],
    vendor: 'Apple',
  },
  {
    regs: [/(pixel c)\b/i, /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
    vendor: 'Google',
  },
  {
    regs: [
      /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i,
      /(?:huawei|honor)([-\w ]+)[;\)]/i,
      /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
    ],
    vendor: 'Huawei',
  },
  {
    regs: [
      /\b(poco[\w ]+)(?: bui|\))/i, // Xiaomi POCO
      /\b; (\w+) build\/hm\1/i, // Xiaomi Hongmi 'numeric' models
      /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, // Xiaomi Hongmi
      /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, // Xiaomi Redmi
      /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i, // Xiaomi Mi
      /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i, // Mi Pad tablets
    ],
    vendor: 'Xiaomi',
  },
  {
    regs: [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
    vendor: 'OPPO',
  },
  {
    regs: [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
    vendor: 'Vivo',
  },
  {
    regs: [/(Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i],
    vendor: 'other',
  },
];

/**
 * 获取设备类型与供应商
 * @param ua window.navigator.userAgent
 * @returns { model: '', vendor: '' }
 */
export const getDevice = (ua?: string) => {
  const device = {
    model: '',
    vendor: '',
  };

  if (!isString(ua)) {
    // node runtimes env
    if (global) return device;

    ua = window.navigator.userAgent;
  }

  device.model = 'pc';
  device.vendor = 'other';

  for (let i = 0; i <= DEVICES.length; i++) {
    if (!DEVICES[i]) break;

    const { regs, vendor } = DEVICES[i];
    const findVal = regs.find((item) => item.exec(ua as string));

    if (findVal) {
      device.model = 'mobile';
      device.vendor = vendor;
      break;
    }
  }

  return device;
};
