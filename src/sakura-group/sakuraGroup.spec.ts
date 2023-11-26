import { SakuraGroup } from "./sakuraGroup"
class PG1 extends SakuraGroup{
  constructor(){ super(10) }
  MaxAmount(): number {
    return 10
  }
}

class PG2 extends SakuraGroup{
  constructor(){ super(2) }
  MaxAmount(): number {
    return 10
  }
}

describe('>>> Petals Group', () => {
  let suc: SakuraGroup
  let target: SakuraGroup
  beforeEach(() => {
    suc = new PG1()
    target = new PG2()
  })

  it('should move petals correctly', () => {
    suc.Move(target, 3)
    expect(suc.Amount).toBe(7)
    expect(target.Amount).toBe(5)
  })

  it('should throw error when moving and decreasing petals more than existing amount', () => {
    expect(()=>{ suc.Move(target, 100) }).toThrow()
    expect(()=>{ suc.Decrease(100) }).toThrow()
  })

  it('should throw error when moving and increasing petals more than max amount', () => {
    expect(()=>{ suc.Increase(100) }).toThrow()
    expect(()=>{ target.Move(suc,2) }).toThrow()
  })
})
