export default class CalcTest {
  // プロパティ
  public a: number;
  public b: number;

  // コンストラクタab
  constructor() {
    this.a = 10;
    this.b = 25;
  }

  // メソッド
  a_plus_b(): void {
    console.log(this.a + this.b);
  }
}
