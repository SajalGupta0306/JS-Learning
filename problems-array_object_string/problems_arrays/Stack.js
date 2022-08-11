class MyStack {
  constructor() {
    this.arr = [];
    this.topIdx = 0;
  }

  push(element) {
    this.arr[this.topIdx] = element;
    this.topIdx += 1;
  }

  pop() {
    this.topIdx -= 1;
    this.arr[this.topIdx] = null;
    return this.arr[this.topIdx];
  }

  peek() {
    return this.arr[this.topIdx - 1];
  }

  isEmpty() {
    return this.topIdx === 0;
  }
}

const st = new MyStack();
st.push(1);
st.push(2);
st.push(3);
console.log(st.arr);
st.pop();
st.pop();
console.log(st.arr);
st.push(4);
console.log(st.arr);
console.log(st.peek());
st.pop();
st.pop();
console.log(st.arr);
console.log(st.isEmpty());
st.push(5);
console.log(st.arr);
console.log(st.isEmpty());
console.log(st.arr);
