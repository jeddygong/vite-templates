import { expect, describe, it } from 'vitest';
import { getDevice } from '.';

describe('device test', () => {
  it('The device should return {}', () => {
    const browser = getDevice();
    expect(browser).toEqual({
      model: '',
      vendor: '',
    });
  });

  it('The device should return mobile/Samsung', () => {
    const uaStr =
      'Mozilla/5.0 (Linux; U; Android 2.3.5; de-de; SAMSUNG GT-S5830/S5830BUKS2 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';
    const device = getDevice(uaStr);
    expect(device).toEqual({
      model: 'mobile',
      vendor: 'Samsung',
    });
  });

  it('The device should return mobile/Apple', () => {
    const uaStr =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1';
    const device = getDevice(uaStr);
    expect(device).toEqual({
      model: 'mobile',
      vendor: 'Apple',
    });
  });

  it('The device should return mobile/Apple', () => {
    const uaStr =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1';
    const device = getDevice(uaStr);
    expect(device).toEqual({
      model: 'mobile',
      vendor: 'Apple',
    });
  });

  it('The device should return mobile/Huawei', () => {
    const uaStr =
      'Mozilla/5.0 (Linux; U; Android 7.0; zh-cn; KNT-AL20 Build/HUAWEIKNT-AL20) AppleWebKit/537.36 (KHTML, like Gecko) MQQBrowser/7.3 Chrome/37.0.0.0 Mobile Safari/537.36';
    const device = getDevice(uaStr);
    expect(device).toEqual({
      model: 'mobile',
      vendor: 'Huawei',
    });
  });

  it('The device should return mobile/other', () => {
    const uaStr =
      'Mozilla/5.0 (Linux; U; Android 2.3.5; en-gb; HTC Desire HD A9191 Build/GRJ90) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';
    const device = getDevice(uaStr);
    expect(device).toEqual({
      model: 'mobile',
      vendor: 'other',
    });
  });

  it('The device should return pc/other', () => {
    const uaStr = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; de-CH) AppleWebKit/523.15 (KHTML, like Gecko, Safari/419.3) Arora/0.2';
    const device = getDevice(uaStr);
    expect(device).toEqual({
      model: 'pc',
      vendor: 'other',
    });
  });
});
