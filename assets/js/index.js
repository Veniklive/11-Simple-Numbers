loop: for (let i = 2; i <= 100; i++) {
  for (let n = 2; n < i; n++) {
    if (i % n == 0) {
      continue loop;
    }
  }
  console.log(i);
}
