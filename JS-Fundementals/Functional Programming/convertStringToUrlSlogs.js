function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join("-");
}

const a = urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
console.log(a);
