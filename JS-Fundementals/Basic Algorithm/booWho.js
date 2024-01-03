function booWho(bool) {
    return typeof bool === 'boolean';
  }
  
  const ans = booWho(null);
  console.log(ans)