function exc1(n) {
  let x = "";
  for (let i = 1; i <= n; i++) {
    x += "*";
  }
  return x;
}

console.log(exc1(5));

function exc2(n) {
  let x = "";
  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= n; i++) {
      x += "*";
    }
    x = x + "\n";
  }
  return x;
}

console.log(exc2(5));

function exc3(n) {
  let x = "";
  let a = 1;
  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= n; i++) {
      x += `${a}`;
      a++;
    }
    x = x + "\n";
    a = 1;
  }
  return x;
}

console.log(exc3(5));

function exc4(n) {
  let x = "";

  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= n; i++) {
      x = x + `${j}`;
    }
    x = x + "\n";
  }
  return x;
}
console.log(exc4(5));

function exc5(n) {
  let x = "";
  let a = n;
  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= n; i++) {
      x += `${a}`;
    }
    x = x + "\n";
    a--;
  }
  return x;
}
console.log(exc5(5));

function exc6(n) {
  let x = "";
  let a = 1;
  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= n; i++) {
      x += `${a}`;
      a++;
    }
    x = x + "\n";
  }
  return x;
}
console.log(exc6(5));

function exc7(n) {
  let x = "";
  let a = n ** 2;
  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= n; i++) {
      x += `${a}`;
      a--;
    }
    x = x + "\n";
  }
  return x;
}
console.log(exc7(4));

function exc8(n) {
  let x = "";
  let a = 0;

  for (let i = 1; i <= n; i++) {
    x += `${a}` + "\n";
    a += 2;
  }

  return x;
}
console.log(exc8(5));

function exc9(n) {
  let x = "";
  let a = 2;

  for (let i = 1; i <= n; i++) {
    x += `${a}` + "\n";
    a += 2;
  }

  return x;
}
console.log(exc9(5));

function exc10(n) {
  let x = "";

  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= n; i++) {
      x += `${i * j}`;
    }
    x = x + "\n";
  }

  return x;
}
console.log(exc10(5));

function exc11(n) {
  let x = "";
  const a = "-";
  const b = "*";
  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= n; i++) {
      if (i == j) {
        x = x + `${a}`;
      } else {
        x += `${b}`;
      }
    }
    x = x + "\n";
  }
  return x;
}
console.log(exc11(5));

function exc12(n) {
  let x = "";

  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= n; i++) {
      i == n - (j - 1) ? (x += "-") : (x += "*");
    }
    x += "\n";
  }
  return x;
}
console.log(exc12(5));

function exc13(n) {
  let x = "";
  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= n; i++) {
      i <= j ? (x += "*") : (x += "-");
    }
    x += "\n";
  }
  return x;
}
console.log(exc13(5));

function exc14(n) {
  let x = "";
  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= n; i++) {
      i <= n - (j - 1) ? (x += "*") : (x += "-");
    }
    x += "\n";
  }
  return x;
}
console.log(exc14(5));

function exc15(n) {
  let x = "";
  for (let j = 1; j <= 2 * n - 1; j++) {
    for (let i = 1; i <= n; i++) {
      if (j <= n && i <= j) {
        x += "*";
      } else if (j <= n && i <= n) {
        x += "-";
      } else if (j > n && i <= n - (j - n)) {
        x += "*";
      } else {
        x += "-";
      }
    }
    x += "\n";
  }
  return x;
}
console.log(exc15(5));

function exc16(n) {
  let x = "";
  for (let j = 1; j <= 2 * n - 1; j++) {
    for (let i = 1; i <= n; i++) {
      if (j <= n && i <= j) {
        x += `${j}`;
      } else if (j <= n && i <= n) {
        x += "-";
      } else if (j > n && i <= n - (j - n)) {
        x += `${2 * n - j}`;
      } else {
        x += "-";
      }
    }
    x += "\n";
  }
  return x;
}
console.log(exc16(5));

function exc17(n) {
  let x = "";
  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= n; i++) {
      i <= n - j ? (x += "-") : (x += "*");
    }
    x += "\n";
  }
  return x;
}
console.log(exc17(5));

function exc18(n) {
  let x = "";
  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= n; i++) {
      i >= j ? (x += "*") : (x += "-");
    }
    x += "\n";
  }
  return x;
}
console.log(exc18(5));

function exc19(n) {
  let x = "";
  for (let j = 1; j <= 2 * n - 1; j++) {
    for (let i = 1; i <= n; i++) {
      if (j <= n && i <= n - j) {
        x += "-";
      } else if (j <= n && i <= n) {
        x += "*";
      } else if (j > n && i <= j - n) {
        x += "-";
      } else {
        x += "*";
      }
    }
    x += "\n";
  }
  return x;
}
console.log(exc19(5));

function exc20(n) {
  let x = "";
  let b = 1;
  for (let j = 1; j <= 2 * n - 1; j++) {
    for (let i = 1; i <= n; i++) {
      if (j <= n && i <= n - j) {
        x += "-";
      } else if (j <= n && i <= n) {
        x += `${b}`;
        b++;
      } else if (j > n && i <= j - n) {
        x += "-";
      } else {
        x += `${b}`;
        b++;
      }
    }
    x += "\n";
  }
  return x;
}
console.log(exc20(4));

function exc21(n) {
  let x = "";

  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= 2 * n - 1; i++) {
      if (i < n && i <= j) {
        x += "-";
      } else if (i >= n && i <= n + j) {
        x += `-`;
      } else {
        x += `*`;
      }
    }
    x += "\n";
  }
  return x;
}
console.log(exc21(4));

function exc23(n) {
  let x = 2 * (n - 1) + 1;
  let dot = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= x; j++) {
      if (j <= n - i) {
        dot = dot + "-";
      } else if (j > n - i && j < n + i) {
        dot = dot + "*";
      } else if (j >= n + i) {
        dot = dot + "-";
      }
    }
    dot = dot + "\n";
  }
  for (let i = n + 1; i <= x; i++) {
    for (let j = 1; j <= x; j++) {
      if (j <= i - n) {
        dot = dot + "-";
      } else if (j > i - n && j <= x - (i - n)) {
        dot = dot + "*";
      } else if (j > x - (i - n)) {
        dot = dot + "-";
      }
    }
    dot = dot + "\n";
  }

  console.log(dot);
  return dot;
}

console.log(exc23(4));

function exc24(n) {
  let x = 2 * (n - 1) + 1;
  let dot = "";
  let l = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= x; j++) {
      if (j <= n - i) {
        dot = dot + "-";
      } else if (j > n - i && j < n + i) {
        dot = `${dot}${l}`;
        l++;
      } else if (j >= n + i) {
        dot = dot + "-";
      }
    }
    dot = dot + "\n";
  }
  for (let i = n + 1; i <= x; i++) {
    for (let j = 1; j <= x; j++) {
      if (j <= i - n) {
        dot = dot + "-";
      } else if (j > i - n && j <= x - (i - n)) {
        dot = `${dot}${l}`;
        l++;
      } else if (j > x - (i - n)) {
        dot = dot + "-";
      }
    }
    dot = dot + "\n";
  }

  console.log(dot);
  return dot;
}

console.log(exc24(4));
