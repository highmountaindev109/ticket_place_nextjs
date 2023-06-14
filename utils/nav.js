export function insertLinks(objs, prefix) {
  return objs.map((obj) => ({ ...obj, link: `/${prefix}/${obj.id}` }));
}
