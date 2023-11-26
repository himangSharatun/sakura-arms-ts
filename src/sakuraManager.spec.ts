import { PlayerBoard } from "./board/board"
import { SakuraManager } from "./sakuraManager"

describe('>>> Sakura Manager', () => {
  // let suc: SakuraManager
  // let target: PlayerBoard
  // let scene: Phaser.Scene
  // let game: Phaser.Game
  // beforeEach(() => {
  //   suc = new SakuraManager()
  //   game = new Phaser.Game({
  //     type: Phaser.HEADLESS,
  //     scene: {
  //       init: function () {
  //         scene = this;
  //       }
  //     },
  //     callbacks: {
  //       postBoot: function () {
  //         game.loop.stop();
  //       }
  //     }
  //   });
  //   target = new PlayerBoard(scene)
  // })

  // describe('>>> Advance',()=>{
  //   it('should reduce distance correctly', () => {
  //     suc.Advance(target, 1)
  //     expect(suc.Distance.Amount).toBe(9)
  //     expect(target.Aura.Amount).toBe(4)

  //     suc.Advance(target, 1)
  //     expect(suc.Distance.Amount).toBe(8)
  //     expect(target.Aura.Amount).toBe(5)
  //   })

  //   it('should throw error when in mastery zone', () => {
  //     expect(() => {suc.Advance(target, 9)}).toThrow()
  //     // Set to mastery zone
  //     suc.Distance.Decrease(8)
  //     expect(() => {suc.Advance(target, 1)}).toThrow()
  //   })
  // })

  // describe('>>> Retreat',()=> {
  //   beforeEach(() => {
  //     suc.Distance.Decrease(3)
  //   })

  //   it('should increase distance correctly', () => {
  //     suc.Retreat(target, 2)
  //     expect(suc.Distance.Amount).toBe(9)
  //     expect(target.Aura.Amount).toBe(1)

  //     suc.Retreat(target, 1)
  //     expect(suc.Distance.Amount).toBe(10)
  //     expect(target.Aura.Amount).toBe(0)
  //   })

  //   it('should throw error if it is max distance', () => {
  //     suc.Retreat(target, 3)
  //     expect( () => {suc.Retreat(target, 1)}).toThrow()
  //   })
  // })

  // describe('>>> RetreatUsingShadow',()=> {
  //   beforeEach(() => {
  //     suc.Distance.Decrease(8)
  //     suc.Shadow.Increase(2)
  //   })

  //   it('should increase distance using sakura from shadow', () => {
  //     suc.RetreatUsingShadow()
  //     expect(suc.Distance.Amount).toBe(3)
  //     expect(suc.Shadow.Amount).toBe(1)
  //   })

  //   it('should throw error if not in mastery zone', () => {
  //     suc.RetreatUsingShadow()
  //     expect(()=>{ suc.RetreatUsingShadow() }).toThrow()
  //   })
  // })



  // it('should reduce life correctly when hit is called', () => {
  //   suc.HitLife(target,1)
  //   expect(target.Life.Amount).toBe(9)
  //   suc.HitLife(target, 2)
  //   expect(target.Life.Amount).toBe(7)
  // })

  // it('should increase flare correctly when focus is called', () => {
  //   suc.Focus(target, 1)
  //   expect(target.Aura.Amount).toBe(2)
  //   expect(target.Flare.Amount).toBe(1)

  //   suc.Focus(target, 2)
  //   expect(target.Aura.Amount).toBe(0)
  //   expect(target.Flare.Amount).toBe(3)
  // })
})
