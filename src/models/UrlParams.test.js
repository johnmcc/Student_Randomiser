import getUrlParam from '../models/UrlParams';

describe('getUrlParam', () => {
  it('should have an empty names array initially', () => {
    let names = getUrlParam("names[]");
    expect(names.length).toBe(0);
  });

  it("should correctly parse the names parameter when it exists", () => {
    let names = getUrlParam("names[]", "https://example.com/?names[]=John&names[]=Colin");
    expect(names.length).toBe(2);
  });
});