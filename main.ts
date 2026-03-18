namespace SpriteKind {
    export const Dead = SpriteKind.create()
    export const Particle = SpriteKind.create()
    export const trashcompact = SpriteKind.create()
    export const ProjectileKeep = SpriteKind.create()
    export const BouncyBall = SpriteKind.create()
    export const TrueEnd = SpriteKind.create()
    export const Solid = SpriteKind.create()
    export const SolidTop = SpriteKind.create()
    export const Transition = SpriteKind.create()
    export const Twist = SpriteKind.create()
    export const Treadmill = SpriteKind.create()
    export const Hazard = SpriteKind.create()
    export const WeakPoint = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const Doll1 = SpriteKind.create()
    export const Doll2 = SpriteKind.create()
    export const LoveLetter = SpriteKind.create()
    export const PipeBomb = SpriteKind.create()
    export const Explosion = SpriteKind.create()
    export const EvilProjectile = SpriteKind.create()
    export const TrashyBoi = SpriteKind.create()
    export const McDonalds = SpriteKind.create()
    export const PerhapsTrap = SpriteKind.create()
    export const Xtra = SpriteKind.create()
    export const InstantDeath = SpriteKind.create()
}
function LevelStart () {
    music.stopAllSounds()
    sprites.destroy(mySprite)
    scene.setBackgroundImage(assets.image`Nothing`)
    if (BURGrejected == 2) {
        BURGate = 0
        mySprite = sprites.create(assets.image`EliasIdle_0`, SpriteKind.Player)
        controller.moveSprite(mySprite, 100, 0)
    } else {
        if (World == 2) {
            BURGate = 1
            mySprite = sprites.create(assets.image`EliasIdle_1`, SpriteKind.Player)
            controller.moveSprite(mySprite, 80, 0)
        } else {
            BURGate = 0
            mySprite = sprites.create(assets.image`EliasIdle_0`, SpriteKind.Player)
            controller.moveSprite(mySprite, 100, 0)
        }
    }
    scene.cameraFollowSprite(mySprite)
    Berry1 = sprites.create(assets.image`Helthy`, SpriteKind.Enemy)
    trashcompactor = sprites.create(assets.image`trashsquish`, SpriteKind.trashcompact)
    TrueEnd = sprites.create(assets.image`TeleportThingy`, SpriteKind.TrueEnd)
    if (World == 1) {
        tiles.placeOnRandomTile(mySprite, assets.tile`GymStart`)
        tiles.placeOnRandomTile(TrueEnd, assets.tile`GymSpecialend0`)
        tiles.placeOnRandomTile(Berry1, assets.tile`GymBerryTile1`)
        tiles.placeOnRandomTile(trashcompactor, assets.tile`GymEnd`)
    } else {
        tiles.placeOnRandomTile(mySprite, assets.tile`Start`)
        tiles.placeOnRandomTile(TrueEnd, assets.tile`Specialend`)
        tiles.placeOnRandomTile(Berry1, assets.tile`BerryTile`)
        tiles.placeOnRandomTile(trashcompactor, assets.tile`End`)
    }
    TransitionIN()
    info.startCountdown(500)
}
function Boss2 () {
    if (Wait == 0) {
        if (Bossfight == 1) {
            if (BossHealth > 9) {
                Wait = 500
                Boss21ShortHop = 0
                BossAttack = 0
                Vulnerable = 0
                animation.runImageAnimation(
                Boss,
                assets.animation`W2Boss1Attack`,
                75,
                true
                )
                Boss.ax = 30
            } else if (BossHealth == 1) {
                Wait = 500
                BossAttack = 3
                Vulnerable = 0
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.TrueEnd, function (sprite, otherSprite) {
    ActivateTrueEnd()
})
function FallTillGround () {
    if (ChooseLevel == 1 || ChooseWorld == 1) {
        while (!(mySprite.tileKindAt(TileDirection.Center, assets.tile`MenuFloor`))) {
            mySprite.setVelocity(0, 500)
            pause(10)
        }
    } else {
        if (World == 1) {
            while (!(mySprite.tileKindAt(TileDirection.Bottom, assets.tile`MiddleFloorW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`LeftFloorW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`RightFloorW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`LeftFloatW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`MiddleFloatW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`RightFloatW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`LooseFloatW1`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`GroundHoleW1`))))))))) {
                mySprite.setVelocity(0, 500)
                pause(10)
            }
        } else if (World == 2) {
            while (!(mySprite.tileKindAt(TileDirection.Bottom, assets.tile`LeftFloatW2`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`MiddleFloatW2`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`RightFloatW2`) || mySprite.tileKindAt(TileDirection.Bottom, assets.tile`LooseFloatW2`))))) {
                mySprite.setVelocity(0, 500)
                pause(10)
            }
        } else {
            while (!(mySprite.tileKindAt(TileDirection.Bottom, sprites.builtin.forestTiles2) || (mySprite.tileKindAt(TileDirection.Bottom, sprites.builtin.forestTiles1) || (mySprite.tileKindAt(TileDirection.Bottom, sprites.builtin.forestTiles3) || mySprite.tileKindAt(TileDirection.Center, assets.tile`MenuFloor`))))) {
                mySprite.setVelocity(0, 500)
                pause(10)
            }
        }
    }
}
function on_left_button_released () {
    if (Action == 0) {
        if (FreeFall == 1) {
        	
        } else if (Jumping == 1) {
        	
        } else {
            if (BURGate == 1) {
                animation.runImageAnimation(
                mySprite,
                assets.animation`EliasStop_L1`,
                120,
                false
                )
            } else if (BURGate == 2) {
                animation.runImageAnimation(
                mySprite,
                assets.animation`EliasStop_L2`,
                120,
                false
                )
            } else if (BURGate == 3) {
            	
            } else {
                animation.runImageAnimation(
                mySprite,
                assets.animation`EliasStop_L0`,
                120,
                false
                )
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.SolidTop, function (sprite, otherSprite) {
    if (mySprite.y <= otherSprite.y) {
        mySprite.vy = 0
        Give_jump()
        mySprite.vy = 0
        HittingGround_Bounce()
        mySprite.vy = 0
        mySprite.vx = otherSprite.vx
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`U dead`, function (sprite, location) {
    if (Game == 1) {
        Game = 0
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    on_up_button_pressed()
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    JumpOnGround()
    HittingGround_Bounce()
})
function InteractionEvilProj () {
    info.stopCountdown()
    Action = -1
    sprites.destroy(mySprite)
    LevelReset()
    tiles.setCurrentTilemap(tilemap`uLOSE`)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    if (World == 2) {
        game.setGameOverMessage(false, "Right back at'cha!")
        scene.setBackgroundImage(assets.image`UhOh1`)
        pause(100)
        scene.setBackgroundImage(assets.image`UhOh2`)
    }
    pause(100)
    scene.setBackgroundImage(assets.image`UhOh3`)
    pause(100)
    scene.setBackgroundImage(assets.image`UhOh4`)
    pause(100)
    scene.setBackgroundImage(assets.image`UhOh5`)
    pause(3000)
    Course_Fail()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`MenuFloor`, function (sprite, location) {
    Give_jump()
    HittingGround_NoBounce()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    MenuBack()
    if (BURGate == 2) {
        on_B_button_pressed()
    } else if (BURGate == 3) {
        A_button()
    } else {
        if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`)) {
            on_B_button_pressed()
        } else {
            A_button()
        }
    }
})
function MovementEnemies () {
    if (ChooseWorld == 0) {
        if (ChooseLevel == 0) {
            if (Level != 6) {
                if (World == 2) {
                    Doll_1.setVelocity(0, 180)
                    Doll_2.setVelocity(0, 180)
                } else if (World == 3) {
                	
                }
            }
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`SpikeFloor`, function (sprite, location) {
    SpikeDoPop()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.McDonalds, function (sprite, otherSprite) {
    if (Math.percentChance(70)) {
        sprites.destroy(otherSprite, effects.starField, 500)
        controller.moveSprite(mySprite, 80, 0)
        pause(8000)
    } else {
        sprites.destroy(otherSprite, effects.ashes, 500)
        controller.moveSprite(mySprite, 20, 0)
        pause(8000)
    }
    controller.moveSprite(mySprite, 50, 0)
})
sprites.onOverlap(SpriteKind.ProjectileKeep, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    BerrySpawn()
    if (Level == 5) {
        info.changeScoreBy(1)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Doll1, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 200)
    if (Level == 5) {
        info.changeScoreBy(2)
        pause(5000)
    }
    if (Bossfight == 0) {
        Doll_1 = sprites.create(assets.image`Doll`, SpriteKind.Doll1)
        animation.runImageAnimation(
        Doll_1,
        assets.animation`DollWalk`,
        175,
        true
        )
        tiles.placeOnRandomTile(Doll_1, assets.tile`DollSpawnTile0`)
        Doll_1.follow(mySprite, 100)
    }
})
function on_up_button_pressed () {
    if (Code == 1) {
        CodeUp += 1
        if (CodeUp == 10) {
            CodeUp = 0
        }
        if (CodeUp == 1) {
            animation.runImageAnimation(
            CodeB,
            assets.animation`Code1`,
            1,
            true
            )
        } else if (CodeUp == 2) {
            animation.runImageAnimation(
            CodeB,
            assets.animation`Code2`,
            1,
            true
            )
        } else if (CodeUp == 3) {
            animation.runImageAnimation(
            CodeB,
            assets.animation`Code3`,
            1,
            true
            )
        } else if (CodeUp == 4) {
            animation.runImageAnimation(
            CodeB,
            assets.animation`Code4`,
            1,
            true
            )
        } else if (CodeUp == 5) {
            animation.runImageAnimation(
            CodeB,
            assets.animation`Code5`,
            1,
            true
            )
        } else if (CodeUp == 6) {
            animation.runImageAnimation(
            CodeB,
            assets.animation`Code6`,
            1,
            true
            )
        } else if (CodeUp == 7) {
            animation.runImageAnimation(
            CodeB,
            assets.animation`Code7`,
            1,
            true
            )
        } else if (CodeUp == 8) {
            animation.runImageAnimation(
            CodeB,
            assets.animation`Code8`,
            1,
            true
            )
        } else if (CodeUp == 9) {
            animation.runImageAnimation(
            CodeB,
            assets.animation`Code9`,
            1,
            true
            )
        } else {
            animation.runImageAnimation(
            CodeB,
            assets.animation`Code0`,
            1,
            true
            )
        }
    } else {
        MenuDUp()
    }
}
function Burgate3MR () {
    controller.moveSprite(mySprite, 0, 0)
    Attacking = 1
    for (let index = 0; index < 3; index++) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`EliasStROLL_R3`,
        50,
        false
        )
        for (let index = 0; index < 40; index++) {
            mySprite.x += 1
            pause(5)
            if (mySprite.isHittingTile(CollisionDirection.Right)) {
                if (mySprite.isHittingTile(CollisionDirection.Top)) {
                    mySprite.y += 0.75
                } else {
                    mySprite.y += -0.75
                }
                if (!(mySprite.isHittingTile(CollisionDirection.Right))) {
                    mySprite.x += 1
                } else {
                    mySprite.x += -1
                }
                Jumping = 1
            }
            if (World == 4) {
                if (Bossfight == 1) {
                    if (mySprite.overlapsWith(Skull)) {
                        SkullMomentum = 1
                        Skull.setVelocity(200, -200)
                        Skull.ay = 100
                        Skull.ax = -60
                    }
                }
            }
        }
    }
    controller.moveSprite(mySprite, 70, 0)
    Attacking = 0
    if (!(controller.right.isPressed() || controller.left.isPressed())) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`EliasPopUp_R`,
        120,
        false
        )
    }
}
function FreeeFallin () {
    if (Game == 0) {
        info.stopCountdown()
        mySprite.setVelocity(0, 150)
        mySprite2 = sprites.create(img`
            . 
            `, SpriteKind.Dead)
        controller.moveSprite(mySprite2)
        scene.centerCameraAt(mySprite.x, mySprite.y)
        music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
        pause(1000)
        Action = 0
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        pause(2000)
        game.setGameOverMessage(false, "Mass attracts mass-ive")
        Course_Fail()
    }
}
function AttackingWeakpoint () {
    if (Attacking == 1) {
        if (Vulnerable == 1) {
            Vulnerable = 0
            animation.runImageAnimation(
            Boss,
            assets.animation`GymBossDamaged`,
            100,
            true
            )
            BossHealth += -1
            pause(1000)
            if (BossHealth == 0) {
                BossCooldown = -99999
                animation.runImageAnimation(
                Boss,
                assets.animation`Boss1Rampaging`,
                75,
                false
                )
                for (let index = 0; index < 8; index++) {
                    pause(4 * 75)
                    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
                }
                pause(4 * 60)
                music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
                pause(100)
                TreadmillSpeed = 0
                Boss.setKind(SpriteKind.Solid)
                animation.stopAnimation(animation.AnimationTypes.All, BossXtra)
                myBURG = sprites.create(assets.image`BURG`, SpriteKind.Food)
                tiles.placeOnRandomTile(myBURG, assets.tile`GymBossTile`)
                Boss.setImage(assets.image`Boss1Defeated`)
            } else {
                if (BossHealth == 2) {
                    animation.runImageAnimation(
                    Boss,
                    assets.animation`AnimatedBoss1`,
                    100,
                    true
                    )
                    TreadmillSpeed = 10
                } else {
                    animation.runImageAnimation(
                    Boss,
                    assets.animation`AnimatedBoss1`,
                    80,
                    true
                    )
                    TreadmillSpeed = 1
                }
            }
        }
    }
}
function on_right_button_pressed () {
    if (Code == 1) {
        CodeRight += 1
        if (CodeRight == 10) {
            CodeRight = 0
        }
        if (CodeRight == 1) {
            animation.runImageAnimation(
            CodeD,
            assets.animation`Code1`,
            1,
            true
            )
        } else if (CodeRight == 2) {
            animation.runImageAnimation(
            CodeD,
            assets.animation`Code2`,
            1,
            true
            )
        } else if (CodeRight == 3) {
            animation.runImageAnimation(
            CodeD,
            assets.animation`Code3`,
            1,
            true
            )
        } else if (CodeRight == 4) {
            animation.runImageAnimation(
            CodeD,
            assets.animation`Code4`,
            1,
            true
            )
        } else if (CodeRight == 5) {
            animation.runImageAnimation(
            CodeD,
            assets.animation`Code5`,
            1,
            true
            )
        } else if (CodeRight == 6) {
            animation.runImageAnimation(
            CodeD,
            assets.animation`Code6`,
            1,
            true
            )
        } else if (CodeRight == 7) {
            animation.runImageAnimation(
            CodeD,
            assets.animation`Code7`,
            1,
            true
            )
        } else if (CodeRight == 8) {
            animation.runImageAnimation(
            CodeD,
            assets.animation`Code8`,
            1,
            true
            )
        } else if (CodeRight == 9) {
            animation.runImageAnimation(
            CodeD,
            assets.animation`Code9`,
            1,
            true
            )
        } else {
            animation.runImageAnimation(
            CodeD,
            assets.animation`Code0`,
            1,
            true
            )
        }
    } else {
        MenuRight()
        if (Action == 0) {
            if (FreeFall == 1) {
            	
            } else if (Jumping == 1) {
            	
            } else {
                if (BURGate == 1) {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasStroll_R1`,
                    120,
                    true
                    )
                } else if (BURGate == 2) {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasStroll_R2`,
                    120,
                    true
                    )
                } else if (BURGate == 3) {
                	
                } else {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasStroll_R0`,
                    120,
                    true
                    )
                }
            }
            if (BURGate == 3) {
                animation.runImageAnimation(
                mySprite,
                assets.animation`EliasStROLL_R3`,
                100,
                false
                )
                pause(400)
                while (controller.right.isPressed()) {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasStROLL_R3`,
                    100,
                    false
                    )
                    pause(400)
                }
                if (!(controller.left.isPressed())) {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasPopUp_R`,
                    100,
                    false
                    )
                }
            }
            MovementRight = 1
            MovementLeft = 0
        }
    }
}
function InteractionHazard () {
    info.stopCountdown()
    Action = -1
    sprites.destroy(mySprite)
    LevelReset()
    tiles.setCurrentTilemap(tilemap`uLOSE`)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    if (World == 1) {
        game.setGameOverMessage(false, "Feeturing dumbasses")
        scene.setBackgroundImage(assets.image`UhOh1Gym`)
        pause(100)
        scene.setBackgroundImage(assets.image`UhOh2Gym`)
    } else if (World == 2) {
        game.setGameOverMessage(false, "Just stick to inanimate objects")
        scene.setBackgroundImage(assets.image`UhOh1`)
        pause(100)
        scene.setBackgroundImage(assets.image`UhOh2`)
    }
    pause(100)
    scene.setBackgroundImage(assets.image`UhOh3`)
    pause(100)
    scene.setBackgroundImage(assets.image`UhOh4`)
    pause(100)
    scene.setBackgroundImage(assets.image`UhOh5`)
    pause(3000)
    Course_Fail()
}
function BossWallInteraction () {
    if (World == 2) {
        if (BossHealth > 9) {
            if (Boss.isHittingTile(CollisionDirection.Left) || Boss.isHittingTile(CollisionDirection.Right)) {
                if (BossAttack == 7) {
                    Boss.setVelocity(0, 0)
                    Boss.ax = 0
                    animation.runImageAnimation(
                    Boss,
                    assets.animation`W2Boss1Stun`,
                    100,
                    true
                    )
                    Vulnerable = 1
                } else {
                    BossAttack += 1
                    if (Boss.vx < 0) {
                        Boss.ax = 10
                        Boss.x += 8
                        Boss.y += -8
                        if (Math.percentChance(50)) {
                            if (Math.percentChance(50)) {
                                Boss.setVelocity(90, -40)
                            } else {
                                Boss.setVelocity(80, -70)
                            }
                        } else {
                            if (Boss21ShortHop == 1) {
                                if (Math.percentChance(50)) {
                                    Boss.setVelocity(60, -100)
                                } else {
                                    Boss.setVelocity(40, -130)
                                    Boss21ShortHop = 0
                                }
                            } else {
                                Boss.setVelocity(60, -100)
                                Boss21ShortHop = 1
                            }
                        }
                        if (Math.percentChance(20)) {
                            Boss.ax = -40
                        }
                    } else {
                        Boss.ax = -10
                        Boss.x += -8
                        Boss.y += -8
                        if (Math.percentChance(50)) {
                            if (Math.percentChance(50)) {
                                Boss.setVelocity(-90, -40)
                            } else {
                                Boss.setVelocity(-80, -70)
                            }
                        } else {
                            if (Boss21ShortHop == 1) {
                                if (Math.percentChance(50)) {
                                    Boss.setVelocity(-60, -100)
                                } else {
                                    Boss.setVelocity(-40, -130)
                                    Boss21ShortHop = 0
                                }
                            } else {
                                Boss.setVelocity(-60, -100)
                                Boss21ShortHop = 1
                            }
                        }
                        if (Math.percentChance(20)) {
                            Boss.ax = 40
                        }
                    }
                }
            }
        } else if (BossHealth == 1) {
            if (BossXtra.isHittingTile(CollisionDirection.Left) || BossXtra.isHittingTile(CollisionDirection.Right)) {
                if (BossAttack == 7) {
                    BossXtra.setVelocity(0, 0)
                    BossXtra.ax = 0
                    animation.runImageAnimation(
                    BossXtra,
                    assets.animation`W2Boss1Stun`,
                    100,
                    true
                    )
                    Vulnerable = 1
                } else {
                    BossAttack += 1
                    if (BossXtra.vx < 0) {
                        BossXtra.ax = 10
                        BossXtra.x += 8
                        BossXtra.y += -8
                        if (Math.percentChance(50)) {
                            if (Math.percentChance(50)) {
                                BossXtra.setVelocity(90, -40)
                            } else {
                                BossXtra.setVelocity(80, -70)
                            }
                        } else {
                            if (Boss21ShortHop == 1) {
                                if (Math.percentChance(50)) {
                                    BossXtra.setVelocity(60, -100)
                                } else {
                                    BossXtra.setVelocity(40, -130)
                                    Boss21ShortHop = 0
                                }
                            } else {
                                BossXtra.setVelocity(60, -100)
                                Boss21ShortHop = 1
                            }
                        }
                        if (Math.percentChance(20)) {
                            BossXtra.ax = -40
                        }
                    } else {
                        BossXtra.ax = -10
                        BossXtra.x += -8
                        BossXtra.y += -8
                        if (Math.percentChance(50)) {
                            if (Math.percentChance(50)) {
                                BossXtra.setVelocity(-90, -40)
                            } else {
                                BossXtra.setVelocity(-80, -70)
                            }
                        } else {
                            if (Boss21ShortHop == 1) {
                                if (Math.percentChance(50)) {
                                    BossXtra.setVelocity(-60, -100)
                                } else {
                                    BossXtra.setVelocity(-40, -130)
                                    Boss21ShortHop = 0
                                }
                            } else {
                                BossXtra.setVelocity(-60, -100)
                                Boss21ShortHop = 1
                            }
                        }
                        if (Math.percentChance(20)) {
                            BossXtra.ax = 40
                        }
                    }
                }
            }
        }
    }
}
function LevelReset () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Dead)
    sprites.destroyAllSpritesOfKind(SpriteKind.Particle)
    sprites.destroyAllSpritesOfKind(SpriteKind.trashcompact)
    sprites.destroyAllSpritesOfKind(SpriteKind.ProjectileKeep)
    sprites.destroyAllSpritesOfKind(SpriteKind.BouncyBall)
    sprites.destroyAllSpritesOfKind(SpriteKind.TrueEnd)
    sprites.destroyAllSpritesOfKind(SpriteKind.Solid)
    sprites.destroyAllSpritesOfKind(SpriteKind.SolidTop)
    sprites.destroyAllSpritesOfKind(SpriteKind.Doll1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Doll2)
    sprites.destroyAllSpritesOfKind(SpriteKind.LoveLetter)
    sprites.destroyAllSpritesOfKind(SpriteKind.Xtra)
    sprites.destroyAllSpritesOfKind(SpriteKind.InstantDeath)
}
function MenuConfirm () {
    if (Code == 1) {
        let list: number[] = []
        list.unshift(CodeRight)
        list.unshift(CodeDown)
        list.unshift(CodeUp)
        list.unshift(CodeLeft)
        listNumber = 0
        listNumber += list.pop()
        listNumber += list.pop() * 10
        listNumber += list.pop() * 100
        listNumber += list.pop() * 1000
        if (listNumber == 7353) {
            mySprite.sayText("Totally meg", 2000, true)
        } else if (listNumber == 8008) {
            mySprite.sayText("Helst 010", 2000, true)
        } else if (listNumber == 1534) {
            mySprite.sayText("For feit for den", 2000, true)
        } else if (listNumber == 1987) {
            mySprite.sayText("Var det burger-bittet fra 87?!", 2000, true)
        } else if (listNumber == 2010) {
            mySprite.sayText("Mmmmm, 010...", 2000, true)
        } else if (listNumber == 9307) {
            music.stopAllSounds()
            music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.InBackground)
            pause(3000)
            game.showLongText("Elias beholder dietten sin inn i W2, men en ny fare er sluppet fri...", DialogLayout.Center)
            BURGrejected = 2
        } else if (listNumber == 1010) {
            mySprite.sayText("Gave til meg!", 2000, true)
            if (BURGate == 2) {
                pause(2000)
                music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
                animation.runImageAnimation(
                mySprite,
                assets.animation`Kaboom`,
                100,
                false
                )
                pause(2000)
                game.setGameOverMessage(false, "Haha feit")
                game.gameOver(false)
            } else {
                InteractionBurger()
            }
        } else {
        	
        }
    } else {
        if (World == 6) {
            ChooseWorld = 0
            ChooseLevel = 1
        }
        if (ChooseWorld == 1) {
            if (World == 1 || World == 2) {
                ChooseWorld = 0
                ChooseLevel = 1
                Level = 1
            } else {
                music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
            }
        } else if (ChooseLevel == 1) {
            info.setScore(0)
            ChooseLevel = 0
            StartingLevel = 2
            if (World == 1) {
                scene.setBackgroundColor(13)
                if (Level == 1) {
                    tiles.setCurrentTilemap(tilemap`1-1 Gym`)
                    LevelStart()
                } else if (Level == 2) {
                    tiles.setCurrentTilemap(tilemap`1-2 Gym`)
                    LevelStart()
                } else if (Level == 3) {
                    tiles.setCurrentTilemap(tilemap`1-3 Gym`)
                    LevelStart()
                    SpawnWeight12()
                } else if (Level == 4) {
                    tiles.setCurrentTilemap(tilemap`1-4 Gym`)
                    LevelStart()
                    SpawnWeight12()
                } else if (Level == 5) {
                    tiles.setCurrentTilemap(tilemap`1-5 Gym`)
                    LevelStart()
                    OLIVEEEEEEER()
                    SpawnWeight12()
                } else {
                    tiles.setCurrentTilemap(tilemap`1-6 Gym`)
                    LevelStart()
                    Boss = sprites.create(assets.image`Gym Boss_Head`, SpriteKind.Dead)
                    BossXtra = sprites.create(assets.image`Gym Boss_Treadmill`, SpriteKind.Treadmill)
                    tiles.placeOnRandomTile(Boss, assets.tile`GymBossTile`)
                    tiles.placeOnRandomTile(BossXtra, assets.tile`GymBossTile`)
                    Berry1.setVelocity(0, 100)
                }
                if (Level != 6) {
                    SpawnBasketball13()
                }
            } else if (World == 2) {
                if (Level == 1) {
                    tiles.setCurrentTilemap(tilemap`2-1 PinkClouds`)
                    LevelStart()
                } else if (Level == 2) {
                    tiles.setCurrentTilemap(tilemap`2-2 PinkClouds`)
                    LevelStart()
                } else if (Level == 3) {
                    tiles.setCurrentTilemap(tilemap`2-3 PinkClouds`)
                    LevelStart()
                    SpawnLoveLetter()
                } else if (Level == 4) {
                    tiles.setCurrentTilemap(tilemap`2-4 PinkClouds`)
                    LevelStart()
                    SpawnLoveLetter()
                } else if (Level == 5) {
                    tiles.setCurrentTilemap(tilemap`2-5 PinkClouds`)
                    LevelStart()
                    SpawnLoveLetter()
                    OLIVEEEEEEER()
                } else {
                    tiles.setCurrentTilemap(tilemap`2-6 PinkClouds`)
                    LevelStart()
                    Boss = sprites.create(assets.image`W2Boss1`, SpriteKind.Boss)
                    Doll_1 = sprites.create(assets.image`W2Boss2`, SpriteKind.Enemy)
                    Doll_2 = sprites.create(assets.image`W2Boss3`, SpriteKind.Enemy)
                    BossXtra = sprites.create(assets.image`Smilefjes`, SpriteKind.Dead)
                    BossXtra2 = sprites.create(assets.image`Smilefjes`, SpriteKind.Dead)
                    tiles.placeOnRandomTile(BossXtra, assets.tile`W2BossTile`)
                    tiles.placeOnRandomTile(BossXtra2, assets.tile`W2BossTile`)
                    Wait = 0
                }
                if (Level != 6) {
                    SpawnDoll12()
                }
            } else {
                if (W6select == 1) {
                    Level = 3
                    World = 1
                    scene.setBackgroundColor(13)
                    tiles.setCurrentTilemap(tilemap`W6 6-1`)
                    LevelStart()
                    SpawnBasketball13()
                    SpawnWeight12()
                } else if (W6select == 0) {
                    Level = 3
                    World = 2
                    scene.setBackgroundColor(9)
                    tiles.setCurrentTilemap(tilemap`W6 6-2`)
                    LevelStart()
                    SpawnDoll12()
                    for (let index = 0; index < 125; index++) {
                        SpawnLoveLetter()
                    }
                }
            }
            if (Level == 5) {
                sprites.destroyAllSpritesOfKind(SpriteKind.trashcompact)
                sprites.destroyAllSpritesOfKind(SpriteKind.TrueEnd)
            }
            if (BURGrejected != 0) {
                if (Level != 6) {
                    Pytrack = sprites.create(assets.image`PYTRACK`, SpriteKind.InstantDeath)
                    animation.runImageAnimation(
                    Pytrack,
                    assets.animation`PYTRACK_KOMMER`,
                    75,
                    true
                    )
                    tiles.placeOnRandomTile(Pytrack, assets.tile`transparency16`)
                    scene.cameraFollowSprite(Pytrack)
                    pause(1000)
                    music.play(music.melodyPlayable(music.siren), music.PlaybackMode.InBackground)
                    Pytrack.sayText("JEG KOMMER Å TAR (på) DEG!", 2000, false)
                    pause(2500)
                    scene.cameraFollowSprite(mySprite)
                    Pytrack.follow(mySprite, 90)
                    Pytrack.setFlag(SpriteFlag.GhostThroughWalls, true)
                }
            }
        } else {
        	
        }
    }
}
function WalkingSound_BURGate_0 () {
    if (controller.left.isPressed() || controller.right.isPressed()) {
        if (Action == 0) {
            if (FreeFall == 1) {
            	
            } else if (Jumping == 1) {
            	
            } else {
                if (BURGate == 0) {
                    music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.InBackground)
                }
            }
        }
    }
}
sprites.onOverlap(SpriteKind.ProjectileKeep, SpriteKind.Twist, function (sprite, otherSprite) {
    snakkmedDENkaren()
})
function BerrySpawn () {
    if (World == 1) {
        Berry1 = sprites.create(assets.image`Helthy`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(Berry1, assets.tile`GymBerryTile2`)
    } else if (World == 2) {
        Berry1 = sprites.create(assets.image`Helthy`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(Berry1, assets.tile`BerryTile2`)
    } else if (World == 3) {
    	
    } else if (World == 4) {
    	
    } else if (World == 5) {
    	
    } else if (World == 6) {
    	
    } else {
        Berry1 = sprites.create(assets.image`Helthy`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(Berry1, assets.tile`BerryTile2`)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    MenuConfirm()
    if (BURGate >= 2) {
        A_button()
    } else {
        if (ChooseLevel == 0 && ChooseWorld == 0) {
            if (Action == 0 || Action == 1) {
                if (Jump > 0) {
                    JumpHeight = 0
                    pause(120)
                    if (controller.A.isPressed()) {
                        JumpHeight += 1
                    }
                    Jump = 0
                    JumpingActive()
                } else if (BonusJump > 0) {
                    BonusJump = 0
                    JumpHeight = -1
                    JumpingActive()
                }
            } else {
            	
            }
        }
    }
})
function HazardWallInteraction () {
    if (Bossfight == 1) {
        if (World == 2) {
            if (BossHealth > 1) {
                if (BossXtra.isHittingTile(CollisionDirection.Left) || BossXtra.isHittingTile(CollisionDirection.Right)) {
                    if (BossXtra.vx < 0) {
                        BossXtra.ax = 5
                        BossXtra.x += 8
                        BossXtra.y += -8
                        BossXtra.setVelocity(50, 0)
                    } else {
                        BossXtra.ax = -5
                        BossXtra.x += -8
                        BossXtra.y += -8
                        BossXtra.setVelocity(-50, 0)
                    }
                }
            }
        }
    }
}
function snakkmedDENkaren () {
    controller.moveSprite(mySprite, 0, 0)
    if (Action == 1) {
        music.stopAllSounds()
        NOPE = 1
        Cutscene = 1
        info.setScore(-7353)
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        scene.centerCameraAt(mySprite.x, mySprite.y)
        mySprite.setKind(SpriteKind.Dead)
        mySprite.setVelocity(0, 0)
        Oliven.x += -8 * 11
        animation.runImageAnimation(
        Oliven,
        assets.animation`TwistSayNo`,
        75,
        false
        )
        if (BURGate == 1) {
            if (MovementRight == 1) {
                animation.runImageAnimation(
                mySprite,
                assets.animation`EliasATK_R1`,
                100,
                false
                )
                for (let index = 0; index < 32; index++) {
                    mySprite.x += -1.5
                    pause(25)
                }
            } else {
                animation.runImageAnimation(
                mySprite,
                assets.animation`EliasATK_L1`,
                100,
                false
                )
                for (let index = 0; index < 32; index++) {
                    mySprite.x += 1.5
                    pause(25)
                }
            }
        } else {
            animation.runImageAnimation(
            mySprite,
            assets.animation`EliasATK_R0`,
            100,
            false
            )
            for (let index = 0; index < 32; index++) {
                mySprite.x += 1.5
                pause(25)
            }
        }
        if (BURGate == 1) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`EliasStop_L1`,
            120,
            false
            )
        } else {
            animation.runImageAnimation(
            mySprite,
            assets.animation`EliasStop_L0`,
            120,
            false
            )
        }
        for (let index = 0; index < 32; index++) {
            pause(25)
        }
        pause(100)
        music.play(music.createSoundEffect(WaveShape.Noise, 1643, 2827, 255, 0, 2500, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        pause(250)
        sprites.destroy(mySprite, effects.disintegrate, 200)
        pause(250)
        pause(4500)
        game.setGameOverMessage(false, "\"Bro trodde han kunne koke\"")
        Course_Fail()
    } else {
        Action = -1
        if (World == 1) {
            tiles.placeOnRandomTile(mySprite, assets.tile`GymStart`)
            animation.runImageAnimation(
            mySprite,
            assets.animation`EliasStop_R0`,
            120,
            false
            )
            if (info.score() >= 30) {
                pause(400)
                animation.runImageAnimation(
                Oliven,
                assets.animation`Rizzler got rizzed0`,
                1,
                false
                )
                game.showLongText("Oliver: ...", DialogLayout.Bottom)
                pause(2000)
                game.showLongText("Oliver: What the sigma", DialogLayout.Bottom)
                pause(400)
                animation.runImageAnimation(
                Oliven,
                assets.animation`Rizzler kanskje`,
                100,
                true
                )
                game.showLongText("Oliver: Det er noe muffins her...", DialogLayout.Bottom)
                pause(200)
                game.showLongText("Oliver: Men du har vel spist dem", DialogLayout.Bottom)
                pause(200)
                game.showLongText("Oliver: Har du begynt å gå turer nå eller?", DialogLayout.Bottom)
                pause(200)
                animation.runImageAnimation(
                Oliven,
                assets.animation`Rizzler got rizzed0`,
                1,
                false
                )
                game.showLongText("Oliver: Røre gress eller kanskje til og med dusje?", DialogLayout.Bottom)
                pause(2000)
                animation.runImageAnimation(
                Oliven,
                assets.animation`Rizzler kanskje`,
                100,
                true
                )
                pause(1000)
                game.showLongText("Oliver: Greit, jeg kan sole opp dagen din litt", DialogLayout.Bottom)
                sprites.destroyAllSpritesOfKind(SpriteKind.TrueEnd)
                TrueEnd = sprites.create(assets.image`TeleportThingy`, SpriteKind.TrueEnd)
                tiles.placeOnRandomTile(TrueEnd, assets.tile`GymSpecialend0`)
                pause(500)
            } else if (info.score() >= 15) {
                pause(400)
                game.showLongText("Oliver: Du klarte det faktisk?", DialogLayout.Bottom)
                pause(400)
                game.showLongText("Oliver: Nah det er cap wallah", DialogLayout.Bottom)
                pause(400)
                game.showLongText("Oliver: Skill issue", DialogLayout.Bottom)
                pause(400)
                game.showLongText("Oliver: Du klarer fortsatt ikke å slå rekorden min på 30 poeng!", DialogLayout.Bottom)
                pause(400)
                game.showLongText("Oliver: Fordi jeg er som sagt DEN karen", DialogLayout.Bottom)
                pause(200)
                game.showLongText("Oliver: Jeg er han", DialogLayout.Bottom)
                pause(200)
                game.showLongText("Oliver: Jeg er dominerende", DialogLayout.Bottom)
                pause(200)
                game.showLongText("Oliver: Du er min undersått", DialogLayout.Bottom)
                pause(200)
                game.showLongText("Oliver: Jeg har ikke et Gudekompleks, Gud har et Oliverkompleks", DialogLayout.Bottom)
                pause(2000)
                game.showLongText("Oliver: Men jeg kan åpne en passende utgang for deg ;)", DialogLayout.Bottom)
                sprites.destroyAllSpritesOfKind(SpriteKind.trashcompact)
                trashcompactor = sprites.create(assets.image`trashsquish`, SpriteKind.trashcompact)
                tiles.placeOnRandomTile(trashcompactor, assets.tile`GymEnd`)
                pause(500)
            } else {
                pause(400)
                game.showLongText("Oliver: Yoooooooo", DialogLayout.Bottom)
                pause(400)
                game.showLongText("Oliver: Nutunamala", DialogLayout.Bottom)
                pause(400)
                game.showLongText("Oliver: Pga skill issue trenger du kun 15 poeng", DialogLayout.Bottom)
                pause(400)
                game.showLongText("Oliver: Jeg personlig klarer 30 poeng", DialogLayout.Bottom)
                pause(400)
                game.showLongText("Oliver: Men jeg er trossalt DEN karen", DialogLayout.Bottom)
                pause(400)
                game.showLongText("Oliver: Jeg er han", DialogLayout.Bottom)
                pause(200)
                game.showLongText("Oliver: Jeg er dominerende", DialogLayout.Bottom)
                pause(200)
                game.showLongText("Oliver: Du er min undersått", DialogLayout.Bottom)
                pause(200)
                game.showLongText("Oliver: Jeg har ikke et Gudekompleks, Gud har et Oliverkompleks", DialogLayout.Bottom)
                pause(400)
                game.showLongText("Oliver: Så gå vekk din feite Mortenelsker", DialogLayout.Bottom)
                pause(500)
            }
            controller.moveSprite(mySprite, 100, 0)
        } else if (World == 2) {
            Love_Letter.follow(trashcompactor, 140)
            tiles.placeOnRandomTile(mySprite, assets.tile`Start`)
            if (BURGrejected != 0) {
                Pytrack.follow(trashcompactor, 90)
                animation.runImageAnimation(
                Oliven,
                assets.animation`Rizzler got rizzed0`,
                1,
                false
                )
                game.showLongText("Oliver: Oi shit", DialogLayout.Bottom)
                game.showLongText("Oliver: Du holdte faktisk dietten din?", DialogLayout.Bottom)
                pause(200)
                animation.runImageAnimation(
                Oliven,
                assets.animation`Rizzler kanskje`,
                100,
                true
                )
                game.showLongText("Oliver: Dette er da bra for blodsukkeret ditt", DialogLayout.Bottom)
                pause(200)
                game.showLongText("Oliver: Men dette bringer visse...", DialogLayout.Bottom)
                animation.runImageAnimation(
                Oliven,
                assets.animation`Rizzler got rizzed0`,
                1,
                false
                )
                pause(500)
                game.showLongText("Oliver: Konsekvenser", DialogLayout.Bottom)
                animation.runImageAnimation(
                Oliven,
                assets.animation`Rizzler kanskje`,
                100,
                true
                )
                pause(200)
                game.showLongText("Oliver: Du har kanskje møtt på han", DialogLayout.Bottom)
                game.showLongText("Oliver: Møtt på PITRACK", DialogLayout.Bottom)
                pause(200)
                game.showLongText("Oliver: Han var ikke alltid sånn", DialogLayout.Bottom)
                pause(200)
                game.showLongText("Oliver: Før, var han Patrick", DialogLayout.Bottom)
                pause(200)
                game.showLongText("Oliver: Energidrikk-narkomane Patrick...", DialogLayout.Bottom)
                game.showLongText("Oliver: Tok bilder av både store å små", DialogLayout.Bottom)
                pause(2000)
                game.showLongText("Oliver: Hovedsakelig små", DialogLayout.Bottom)
                pause(200)
                game.showLongText("Oliver: En dag dro han på tur", DialogLayout.Bottom)
                game.showLongText("Oliver: Men ble overfalt av nynorske striler", DialogLayout.Bottom)
                pause(200)
                game.showLongText("Oliver: Innen han ble funnet igjen", DialogLayout.Bottom)
                animation.runImageAnimation(
                Oliven,
                assets.animation`Rizzler got rizzed0`,
                1,
                false
                )
                pause(1000)
                game.showLongText("Oliver: Var det for sent...", DialogLayout.Bottom)
                animation.runImageAnimation(
                Oliven,
                assets.animation`Rizzler kanskje`,
                100,
                true
                )
                pause(200)
                game.showLongText("Oliver: Han var gjort høy på muggost", DialogLayout.Bottom)
                game.showLongText("Oliver: Lærd innenfor Ivar Aasen's salmer", DialogLayout.Bottom)
                game.showLongText("Oliver: Opplyst i forhold til ord's kjønn", DialogLayout.Bottom)
                game.showLongText("Oliver: Opplært i nynorsk diktanalyse", DialogLayout.Bottom)
                pause(200)
                game.showLongText("Oliver: Virkelig tragisk", DialogLayout.Bottom)
                pause(200)
                game.showLongText("Oliver: Han har aldri vært den samme igjen", DialogLayout.Bottom)
                pause(1000)
                game.showLongText("Oliver: De eneste gangene han vokner til livet", DialogLayout.Bottom)
                game.showLongText("Oliver: Er når noen forsaker muggost...", DialogLayout.Bottom)
                pause(200)
                game.showLongText("Oliver: La oss bare si...", DialogLayout.Bottom)
                game.showLongText("Oliver: At osten på burgerne ikke er cheddar...", DialogLayout.Bottom)
                pause(2000)
                game.showLongText("Oliver: Kom deg videre nå", DialogLayout.Bottom)
                pause(200)
                game.showLongText("Oliver: Det er mye å gjøre...", DialogLayout.Bottom)
                sprites.destroyAllSpritesOfKind(SpriteKind.TrueEnd)
                TrueEnd = sprites.create(assets.image`TeleportThingy`, SpriteKind.TrueEnd)
                tiles.placeOnRandomTile(TrueEnd, assets.tile`Start`)
            } else {
                animation.runImageAnimation(
                mySprite,
                assets.animation`EliasStop_R1`,
                120,
                false
                )
                if (info.score() >= 30) {
                    pause(400)
                    animation.runImageAnimation(
                    Oliven,
                    assets.animation`Rizzler got rizzed0`,
                    1,
                    false
                    )
                    game.showLongText("Oliver: Hva søren", DialogLayout.Bottom)
                    pause(2000)
                    game.showLongText("Oliver: Hvordan i alle dager...", DialogLayout.Bottom)
                    pause(400)
                    animation.runImageAnimation(
                    Oliven,
                    assets.animation`Rizzler kanskje`,
                    100,
                    true
                    )
                    game.showLongText("Oliver: 30 poeng?", DialogLayout.Bottom)
                    pause(200)
                    game.showLongText("Når du drasser rundt på så mye?", DialogLayout.Bottom)
                    pause(200)
                    game.showLongText("Oliver: Hva er det du skjuler under der?", DialogLayout.Bottom)
                    pause(200)
                    animation.runImageAnimation(
                    Oliven,
                    assets.animation`Rizzler got rizzed0`,
                    1,
                    false
                    )
                    game.showLongText("Oliver: Fly-turbiner for å flytte deg eller?", DialogLayout.Bottom)
                    pause(2000)
                    animation.runImageAnimation(
                    Oliven,
                    assets.animation`Rizzler kanskje`,
                    100,
                    true
                    )
                    pause(1000)
                    game.showLongText("Oliver: Ok, ok!", DialogLayout.Bottom)
                    pause(1000)
                    game.showLongText("Oliver: Jeg kan slippe deg videre", DialogLayout.Bottom)
                    pause(1000)
                    game.showLongText("Oliver: Bare prøv å hold tilbake på matspisingen", DialogLayout.Bottom)
                    sprites.destroyAllSpritesOfKind(SpriteKind.TrueEnd)
                    TrueEnd = sprites.create(assets.image`TeleportThingy`, SpriteKind.TrueEnd)
                    tiles.placeOnRandomTile(TrueEnd, assets.tile`Specialend`)
                    pause(500)
                } else if (info.score() >= 15) {
                    pause(400)
                    game.showLongText("Oliver: Bro fikk det til med 15 tonn fett på kroppen", DialogLayout.Bottom)
                    pause(400)
                    game.showLongText("Oliver: Wallah cap", DialogLayout.Bottom)
                    pause(400)
                    game.showLongText("Oliver: Du er fortsatt en liten penis", DialogLayout.Bottom)
                    pause(400)
                    game.showLongText("Oliver: Broderen klarte ingen skyggelue ikke 30 poeng", DialogLayout.Bottom)
                    pause(400)
                    game.showLongText("Oliver: What the skibiDI", DialogLayout.Bottom)
                    pause(200)
                    game.showLongText("Oliver: Jeg er bare bedre", DialogLayout.Bottom)
                    pause(200)
                    game.showLongText("Oliver: Du er bare et vesen", DialogLayout.Bottom)
                    pause(200)
                    game.showLongText("Oliver: Jaja du gjorde det jeg ba om", DialogLayout.Bottom)
                    pause(200)
                    game.showLongText("Oliver: Så jeg kan åpne en utgang", DialogLayout.Bottom)
                    pause(2000)
                    game.showLongText("Oliver: Selv om du ikke kan snakke med jenter", DialogLayout.Bottom)
                    sprites.destroyAllSpritesOfKind(SpriteKind.trashcompact)
                    trashcompactor = sprites.create(assets.image`trashsquish`, SpriteKind.trashcompact)
                    tiles.placeOnRandomTile(trashcompactor, assets.tile`End`)
                    pause(500)
                } else {
                    pause(400)
                    game.showLongText("Oliver: Oi satan", DialogLayout.Bottom)
                    pause(400)
                    game.showLongText("Oliver: Du har blitt feitere", DialogLayout.Bottom)
                    pause(400)
                    game.showLongText("Oliver: Du var jo feit fra før men", DialogLayout.Bottom)
                    pause(400)
                    game.showLongText("Oliver: Dæven", DialogLayout.Bottom)
                    pause(400)
                    game.showLongText("Oliver: Visste ikke at det gikk an å veie så mye", DialogLayout.Bottom)
                    pause(400)
                    game.showLongText("Oliver: Jeg skal ikke spørre hvor mye for vekten knuser nok men", DialogLayout.Bottom)
                    pause(200)
                    game.showLongText("Oliver: konseptet er hvertfall det samme", DialogLayout.Bottom)
                    pause(200)
                    game.showLongText("Oliver: 15 poeng blabla ingen bryr seg du er feit", DialogLayout.Bottom)
                    pause(200)
                    game.showLongText("Oliver: Husk hvor dominerende jeg er", DialogLayout.Bottom)
                    pause(400)
                    game.showLongText("Oliver: Jeg klarte 30 poeng", DialogLayout.Bottom)
                    pause(400)
                    game.showLongText("Oliver: Lykke til...", DialogLayout.Bottom)
                    pause(500)
                    game.showLongText("Oliver: ...med spillet og dietten", DialogLayout.Bottom)
                    pause(500)
                }
                controller.moveSprite(mySprite, 80, 0)
                Love_Letter.follow(mySprite, 140)
            }
        } else {
            controller.moveSprite(mySprite, 50, 0)
        }
        Action = 0
    }
}
function JumpOnGround () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`MenuFloor`)) {
        Give_jump()
    }
    if (mySprite.tileKindAt(TileDirection.Bottom, sprites.builtin.forestTiles2)) {
        Give_jump()
    } else if (mySprite.tileKindAt(TileDirection.Bottom, sprites.builtin.forestTiles1)) {
        Give_jump()
    } else if (mySprite.tileKindAt(TileDirection.Bottom, sprites.builtin.forestTiles3)) {
        Give_jump()
    }
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`MiddleFloorW1`)) {
        Give_jump()
    } else if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`LeftFloorW1`)) {
        Give_jump()
    } else if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`RightFloorW1`)) {
        Give_jump()
    } else if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`LeftFloatW1`)) {
        Give_jump()
    } else if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`MiddleFloatW1`)) {
        Give_jump()
    } else if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`RightFloatW1`)) {
        Give_jump()
    } else if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`LooseFloatW1`)) {
        Give_jump()
    } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`GroundHoleW1`)) {
        Give_jump()
    }
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`LeftFloatW2`)) {
        Give_jump()
    } else if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`MiddleFloatW2`)) {
        Give_jump()
    } else if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`RightFloatW2`)) {
        Give_jump()
    } else if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`LooseFloatW2`)) {
        Give_jump()
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    ProjectileBossInteraction()
})
function WalkingSound_BURGate_3 () {
    if (controller.left.isPressed() || controller.right.isPressed()) {
        if (Action == 0) {
            if (FreeFall == 1) {
            	
            } else if (Jumping == 1) {
            	
            } else {
                if (BURGate == 3) {
                    music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
                }
            }
        }
    }
}
function on_right_button_released () {
    if (Action == 0) {
        if (FreeFall == 1) {
        	
        } else if (Jumping == 1) {
        	
        } else {
            if (BURGate == 1) {
                animation.runImageAnimation(
                mySprite,
                assets.animation`EliasStop_R1`,
                120,
                false
                )
            } else if (BURGate == 2) {
                animation.runImageAnimation(
                mySprite,
                assets.animation`EliasStop_R2`,
                120,
                false
                )
            } else if (BURGate == 3) {
            	
            } else {
                animation.runImageAnimation(
                mySprite,
                assets.animation`EliasStop_R0`,
                120,
                false
                )
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Explosion, function (sprite, otherSprite) {
    InteractionExplosion()
})
scene.onHitWall(SpriteKind.EvilProjectile, function (sprite, location) {
    if (World == 2) {
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
        animation.runImageAnimation(
        projectile2,
        assets.animation`BowlingDead`,
        100,
        false
        )
    } else if (World == 3) {
        sprites.destroy(sprite, effects.ashes, 200)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    on_left_button_pressed()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Solid, function (sprite, otherSprite) {
    if (mySprite.x > otherSprite.x) {
        if (Action == 1) {
            mySprite.x += 8
        } else {
            mySprite.x += 3
        }
    } else if (mySprite.x < otherSprite.x) {
        if (Action == 1) {
            mySprite.x += -8
        } else {
            mySprite.x += -3
        }
    } else if (mySprite.x == otherSprite.x) {
        mySprite.vx = otherSprite.vx
    }
})
sprites.onOverlap(SpriteKind.Doll2, SpriteKind.Explosion, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 200)
    Doll_2 = sprites.create(assets.image`Doll`, SpriteKind.Doll2)
    animation.runImageAnimation(
    Doll_2,
    assets.animation`DollWalk`,
    175,
    true
    )
    tiles.placeOnRandomTile(Doll_2, assets.tile`DollSpawnTile2`)
    Doll_2.follow(mySprite, 100)
})
function MenuLeft () {
    if (ChooseWorld == 1) {
        World += -1
        if (World == 0) {
            World = 6
        }
    } else if (ChooseLevel == 1) {
        Level += -1
        if (Level == 0) {
            Level = 6
        }
    } else {
    	
    }
}
function MenuBack () {
    if (ChooseWorld == 1) {
        Action = -2
        ChooseWorld = 0
        Code = 1
        scene.setBackgroundImage(assets.image`UhOh5`)
        tiles.setCurrentTilemap(tilemap`TheCodes`)
        CodeA = sprites.create(assets.image`SmolNothing`, SpriteKind.Dead)
        CodeB = sprites.create(assets.image`SmolNothing`, SpriteKind.Dead)
        CodeC = sprites.create(assets.image`SmolNothing`, SpriteKind.Dead)
        CodeD = sprites.create(assets.image`SmolNothing`, SpriteKind.Dead)
        tiles.placeOnRandomTile(CodeA, assets.tile`CodeLeft`)
        tiles.placeOnRandomTile(CodeB, assets.tile`CodeUp2`)
        tiles.placeOnRandomTile(CodeC, assets.tile`CodeDown`)
        tiles.placeOnRandomTile(CodeD, assets.tile`CodeRight`)
        CodeLeft = 0
        CodeUp = 0
        CodeDown = 0
        CodeRight = 0
        tiles.placeOnRandomTile(mySprite, assets.tile`W3BossTile`)
    } else if (ChooseLevel == 1) {
        ChooseLevel = 0
        ChooseWorld = 1
        Level = 1
    } else if (Code == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Dead)
        Code = -1
        tiles.setCurrentTilemap(tilemap`TittleMap`)
        tiles.placeOnRandomTile(mySprite, assets.tile`MenuFloor`)
        scene.cameraFollowSprite(mySprite)
        TransitionIN()
        Action = 0
        ChooseWorld = 1
        pause(1000)
        Code = 0
    } else {
    	
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.trashcompact, function (sprite, otherSprite) {
    ActivateEnd()
})
function PlayMusic () {
    if (Music == 0) {
        music.play(music.createSong(assets.song`Nada`), music.PlaybackMode.InBackground)
        Music = 1
        if (Bossfight == 1) {
            if (World == 5) {
                music.play(music.createSong(assets.song`A World Shattering`), music.PlaybackMode.UntilDone)
            } else {
                music.play(music.createSong(assets.song`Boss Battle`), music.PlaybackMode.UntilDone)
            }
            Music = 0
        } else if (Cutscene > 0) {
        	
        } else {
            if (ChooseWorld == 0 && ChooseLevel == 0) {
                if (World == 1) {
                    music.play(music.createSong(assets.song`Heavy Melody`), music.PlaybackMode.UntilDone)
                } else if (World == 2) {
                    music.play(music.createSong(assets.song`Hopeful Lullaby`), music.PlaybackMode.UntilDone)
                } else if (World == 3) {
                    music.play(music.createSong(assets.song`The Bog`), music.PlaybackMode.UntilDone)
                } else if (World == 4) {
                    music.play(music.createSong(assets.song`Venture Further`), music.PlaybackMode.UntilDone)
                } else if (World == 5) {
                    music.play(music.createSong(assets.song`Processing Data`), music.PlaybackMode.UntilDone)
                }
            } else {
                music.play(music.createSong(assets.song`MainTheme`), music.PlaybackMode.UntilDone)
            }
            Music = 0
        }
    }
}
function WeightsDoTurn2 () {
    if (World == 1) {
        if (Level >= 3 && Level <= 5) {
            if (ChooseLevel == 0) {
                if (WeigthLower1.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`)) {
                    if (Weight1.vx < 0) {
                        Weight1.setVelocity(0, 0)
                        WeightUpper1.setVelocity(0, 0)
                        WeigthLower1.setVelocity(0, 0)
                        Weight1.x += 1
                        WeightUpper1.x += 1
                        WeigthLower1.x += 1
                        Weight1.setVelocity(50, 0)
                        WeightUpper1.setVelocity(50, 0)
                        WeigthLower1.setVelocity(50, 0)
                    } else if (Weight1.vx > 0) {
                        Weight1.setVelocity(0, 0)
                        WeightUpper1.setVelocity(0, 0)
                        WeigthLower1.setVelocity(0, 0)
                        Weight1.x += -1
                        WeightUpper1.x += -1
                        WeigthLower1.x += -1
                        Weight1.setVelocity(-50, 0)
                        WeightUpper1.setVelocity(-50, 0)
                        WeigthLower1.setVelocity(-50, 0)
                    } else {
                    	
                    }
                }
            }
        }
    } else {
    	
    }
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    on_right_button_released()
})
function W2Boss1Action2 () {
    if (World == 2) {
        if (Bossfight == 1) {
            if (BossHealth > 6) {
                Boss.vy += 1
            } else if (BossHealth == 2) {
                if (SwitchA == 0) {
                    BossXtra2.vy += 2
                }
            }
        }
    }
}
function WalkingSound_BURGate_1 () {
    if (controller.left.isPressed() || controller.right.isPressed()) {
        if (Action == 0) {
            if (FreeFall == 1) {
            	
            } else if (Jumping == 1) {
            	
            } else {
                if (BURGate == 1) {
                    music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.InBackground)
                }
            }
        }
    }
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    on_left_button_released()
})
function W2Boss3Action () {
    while (BossAttack3 > 0) {
        if (BossHealth == 3) {
            if (SwitchA == 0) {
                SwitchA = 1
                BossHealth = 3
                pause(12000)
            }
        } else if (BossHealth == 2) {
            BossAttack3 = 0
            BossHealth = 2
            break;
        }
        if (BossAttack3 > 0) {
            if (Math.percentChance(50)) {
                if (Math.percentChance(50)) {
                    if (Math.percentChance(50)) {
                        tiles.placeOnTile(Boss, tiles.getTileLocation(40, 9))
                    } else {
                        tiles.placeOnTile(Boss, tiles.getTileLocation(41, 9))
                    }
                } else {
                    if (Math.percentChance(50)) {
                        tiles.placeOnTile(Boss, tiles.getTileLocation(42, 9))
                    } else {
                        tiles.placeOnTile(Boss, tiles.getTileLocation(43, 9))
                    }
                }
            } else {
                if (Math.percentChance(50)) {
                    if (Math.percentChance(50)) {
                        tiles.placeOnTile(Boss, tiles.getTileLocation(44, 9))
                    } else {
                        tiles.placeOnTile(Boss, tiles.getTileLocation(46, 9))
                    }
                } else {
                    if (Math.percentChance(50)) {
                        tiles.placeOnTile(Boss, tiles.getTileLocation(47, 9))
                    } else {
                        tiles.placeOnTile(Boss, tiles.getTileLocation(48, 9))
                    }
                }
            }
        }
        if (BossHealth == 3) {
            pause(2000)
        }
        animation.runImageAnimation(
        Boss,
        assets.animation`W2Boss3WarpInn`,
        70,
        false
        )
        pause(1000)
        if (BossAttack3 == 5) {
            Vulnerable = 1
            animation.runImageAnimation(
            Boss,
            assets.animation`W2Boss3Vulnearable`,
            100,
            true
            )
            for (let index = 0; index < 3000; index++) {
                if (BossHealth == 3) {
                    pause(1)
                }
            }
            pause(3000)
            if (BossHealth != 2) {
                Vulnerable = 0
            }
            BossAttack3 = 1
            animation.runImageAnimation(
            Boss,
            assets.animation`W2Boss3WarpOut`,
            70,
            false
            )
            pause(3000)
        } else {
            BossAttack3 += 1
            animation.runImageAnimation(
            Boss,
            assets.animation`W2Boss3Summon`,
            70,
            false
            )
            pause(420)
            if (BossHealth > 3) {
                Doll_1 = sprites.create(assets.image`Doll`, SpriteKind.Doll1)
                animation.runImageAnimation(
                Doll_1,
                assets.animation`DollWalk`,
                175,
                true
                )
                tiles.placeOnTile(Doll_1, Boss.tilemapLocation())
                if (BossHealth > 3) {
                    Doll_1.follow(mySprite, 30)
                } else {
                    Doll_1.follow(mySprite, 10)
                }
                Doll_1.setVelocity(0, 180)
            }
            pause(500)
        }
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Doll2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 200)
    if (Level == 5) {
        info.changeScoreBy(2)
        pause(5000)
    }
    Doll_2 = sprites.create(assets.image`Doll`, SpriteKind.Doll2)
    animation.runImageAnimation(
    Doll_2,
    assets.animation`DollWalk`,
    175,
    true
    )
    tiles.placeOnRandomTile(Doll_2, assets.tile`DollSpawnTile2`)
    Doll_2.follow(mySprite, 100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.LoveLetter, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.hearts, 200)
    if (Level == 5) {
        info.changeScoreBy(3)
        pause(15000)
    }
    pause(15000)
    SpawnLoveLetter()
})
function Give_jump () {
    Jump = 1
    BonusJump = 1
}
function A_button () {
    if (StartingLevel > 0) {
        StartingLevel = 0
    } else {
        if (AttackReady == 1) {
            if (Action == 0) {
                AttackReady = 0
                Action = 1
                if (BURGate == 1) {
                    music.play(music.createSoundEffect(WaveShape.Noise, 3300, 1400, 255, 0, 800, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                    Attacking = 1
                    if (MovementLeft == 1) {
                        animation.runImageAnimation(
                        mySprite,
                        assets.animation`EliasATK_L1`,
                        100,
                        false
                        )
                        mySprite.startEffect(effects.spray, 800)
                        for (let index = 0; index < 100; index++) {
                            mySprite.x += -0.5
                            pause(5)
                        }
                        Attacking = 1
                        controller.moveSprite(mySprite, 0, 0)
                        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
                        for (let index = 0; index < 50; index++) {
                            mySprite.x += -0.5
                            pause(9)
                        }
                    } else {
                        animation.runImageAnimation(
                        mySprite,
                        assets.animation`EliasATK_R1`,
                        100,
                        false
                        )
                        mySprite.startEffect(effects.spray, 800)
                        for (let index = 0; index < 100; index++) {
                            mySprite.x += 0.5
                            pause(5)
                        }
                        Attacking = 1
                        controller.moveSprite(mySprite, 0, 0)
                        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
                        for (let index = 0; index < 50; index++) {
                            mySprite.x += 0.5
                            pause(9)
                        }
                    }
                    Attacking = 0
                    pause(1800)
                    controller.moveSprite(mySprite, 80, 0)
                } else if (BURGate == 2) {
                    if (Jump == 0) {
                        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
                    }
                    Jumping = 1
                    controller.moveSprite(mySprite, 0, 0)
                    projectile = sprites.create(img`
                        . 
                        `, SpriteKind.ProjectileKeep)
                    Particle2 = sprites.create(img`
                        . 
                        `, SpriteKind.Particle)
                    tiles.placeOnTile(projectile, mySprite.tilemapLocation())
                    tiles.placeOnTile(Particle2, mySprite.tilemapLocation())
                    projectile.x += -16
                    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`)) {
                        if (MovementLeft == 1) {
                            projectile.x += 16
                            Particle2.x += 16
                        } else {
                            projectile.x += -16
                            Particle2.x += -16
                        }
                    }
                    if (MovementLeft == 1) {
                        animation.runImageAnimation(
                        mySprite,
                        assets.animation`EliasATK_L2`,
                        50,
                        false
                        )
                    } else {
                        animation.runImageAnimation(
                        mySprite,
                        assets.animation`EliasATK_R2`,
                        50,
                        false
                        )
                    }
                    pause(800)
                    controller.moveSprite(mySprite, 50, 0)
                    animation.runImageAnimation(
                    projectile,
                    assets.animation`Shockwave`,
                    75,
                    false
                    )
                    animation.runImageAnimation(
                    Particle2,
                    assets.animation`CracksInGround`,
                    75,
                    false
                    )
                    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
                    mySprite.setVelocity(0, -150)
                    pause(150)
                    mySprite.setVelocity(0, -100)
                    pause(150)
                    mySprite.setVelocity(0, -60)
                    pause(150)
                    mySprite.setVelocity(0, -30)
                    pause(100)
                    Jumping = 0
                    FreeFall = 1
                    PauseTillGround()
                    if (MovementRight == 1) {
                        animation.runImageAnimation(
                        mySprite,
                        assets.animation`EliasLanding_R2`,
                        120,
                        false
                        )
                    } else {
                        animation.runImageAnimation(
                        mySprite,
                        assets.animation`EliasLanding_L2`,
                        120,
                        false
                        )
                    }
                    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
                    sprites.destroy(projectile)
                    sprites.destroy(Particle2)
                } else if (BURGate == 3) {
                    music.play(music.createSoundEffect(WaveShape.Noise, 1629, 1, 255, 0, 600, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                    mySprite.startEffect(effects.spray, 600)
                    if (controller.left.isPressed() && !(controller.right.isPressed())) {
                        Burgate3ML()
                    } else if (controller.right.isPressed() && !(controller.left.isPressed())) {
                        Burgate3MR()
                    } else if (mySprite.vx < 0) {
                        Burgate3ML()
                    } else if (mySprite.vx > 0) {
                        Burgate3MR()
                    } else if (MovementLeft == 1) {
                        Burgate3ML()
                    } else if (MovementRight == 1) {
                        Burgate3MR()
                    }
                    Jumping = 0
                } else {
                    music.play(music.createSoundEffect(WaveShape.Noise, 3300, 1400, 255, 0, 800, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasATK_R0`,
                    100,
                    false
                    )
                    mySprite.startEffect(effects.spray, 800)
                    Attacking = 1
                    for (let index = 0; index < 16; index++) {
                        if (mySprite.kind() == SpriteKind.Player) {
                            mySprite.x += 3
                            pause(25)
                        }
                    }
                    for (let index = 0; index < 16; index++) {
                        if (mySprite.kind() == SpriteKind.Player) {
                            mySprite.x += 3
                            pause(25)
                        }
                    }
                    Attacking = 0
                }
                Action = 0
                if (BURGate == 2) {
                    pause(250)
                } else {
                    pause(1500)
                }
                AttackReady = 1
            }
        } else {
        	
        }
    }
}
scene.onHitWall(SpriteKind.Boss, function (sprite, location) {
    BossWallInteraction()
})
function HittingGround_NoBounce () {
    if (FreeFall == 1) {
        if (Action == 0) {
            if (BURGate != 3) {
                animation.stopAnimation(animation.AnimationTypes.All, mySprite)
            }
            if (BURGate == 1) {
                if (MovementRight == 1) {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasLanding_R1`,
                    120,
                    false
                    )
                } else {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasLanding_L1`,
                    120,
                    false
                    )
                }
            } else if (BURGate == 2) {
                if (MovementRight == 1) {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasLanding_R2`,
                    120,
                    false
                    )
                } else {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasLanding_L2`,
                    120,
                    false
                    )
                }
                music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
            } else if (BURGate == 3) {
                music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
            } else {
                music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
                if (MovementRight == 1) {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasLanding_R0`,
                    120,
                    false
                    )
                } else {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasLanding_L0`,
                    120,
                    false
                    )
                }
            }
        }
        FreeFall = 0
        Jumping = 0
        pause(10)
        mySprite.setVelocity(0, 500)
    }
}
function SpawnDoll12 () {
    Doll_1 = sprites.create(assets.image`Doll`, SpriteKind.Doll1)
    Doll_2 = sprites.create(assets.image`Doll`, SpriteKind.Doll2)
    animation.runImageAnimation(
    Doll_1,
    assets.animation`DollWalk`,
    175,
    true
    )
    animation.runImageAnimation(
    Doll_2,
    assets.animation`DollWalk`,
    175,
    true
    )
    tiles.placeOnRandomTile(Doll_1, assets.tile`DollSpawnTile0`)
    tiles.placeOnRandomTile(Doll_2, assets.tile`DollSpawnTile2`)
    Doll_1.follow(mySprite, 100)
    Doll_2.follow(mySprite, 100)
}
function SpeedOfTreadmill () {
    if (TreadmillSpeed != 0) {
        if (Level == 6) {
            if (World == 1) {
                if (Bossfight == 1) {
                    if (Jump == 0) {
                        if (BossHealth == 1) {
                            mySprite.x += 0.7
                        } else if (BossHealth == 2) {
                            mySprite.x += 0.6
                        } else {
                            mySprite.x += 0.5
                        }
                    } else {
                        if (BossHealth == 1) {
                            mySprite.x += 1.4
                        } else if (BossHealth == 2) {
                            mySprite.x += 1.2
                        } else {
                            mySprite.x += 1
                        }
                    }
                }
            }
        }
    }
}
function Boss1 () {
    if (Bossfight == 1) {
        BossCooldown += 1
        if (BossCooldown == 300) {
            BossAttack += 1
            if (BossAttack > 3) {
                BossAttack = 0
                BossCooldown = 950
                music.play(music.melodyPlayable(music.siren), music.PlaybackMode.InBackground)
            } else {
                if (Math.percentChance(30)) {
                    if (BossHealth == 3) {
                        BossCooldown = -500
                    } else if (BossHealth == 2) {
                        if (Math.percentChance(50)) {
                            BossCooldown = -500
                        } else {
                            BossCooldown = -250
                        }
                    } else {
                        if (Math.percentChance(33)) {
                            BossCooldown = -500
                        } else if (Math.percentChance(33)) {
                            BossCooldown = -250
                        } else {
                            BossCooldown = -125
                        }
                    }
                    sprites.destroyAllSpritesOfKind(SpriteKind.Hazard)
                    BigOlFoot = sprites.create(assets.image`StompingFoot`, SpriteKind.Dead)
                    tiles.placeOnTile(BigOlFoot, Boss.tilemapLocation())
                    BigOlFoot.follow(mySprite, 100)
                    animation.runImageAnimation(
                    BigOlFoot,
                    assets.animation`FootBeReady`,
                    75,
                    false
                    )
                } else if (Math.percentChance(40)) {
                    SpawnWeight12()
                    Weight1.setVelocity(0, 130)
                    WeightUpper1.setVelocity(0, 130)
                    WeigthLower1.setVelocity(0, 130)
                    Weight2.setVelocity(0, 130)
                    WeightUpper2.setVelocity(0, 130)
                    WeightLower2.setVelocity(0, 130)
                    Weight1.setFlag(SpriteFlag.Ghost, true)
                    Weight2.setFlag(SpriteFlag.Ghost, true)
                    WeigthLower1.setFlag(SpriteFlag.Ghost, true)
                    WeightLower2.setFlag(SpriteFlag.Ghost, true)
                } else {
                    if (Math.percentChance(33)) {
                        BossCooldown = 1050
                    } else if (Math.percentChance(33)) {
                        BossCooldown = 1100
                    } else {
                        BossCooldown = 1149
                    }
                }
            }
        } else if (BossCooldown == 0) {
            BigOlFoot.setKind(SpriteKind.Hazard)
            animation.runImageAnimation(
            BigOlFoot,
            assets.animation`FootGoStomp`,
            50,
            false
            )
        } else if (BossCooldown == -50) {
            BigOlFoot.follow(mySprite, 0)
        } else if (BossCooldown == 650) {
            BossCooldown = 1
            sprites.destroy(Weight1)
            sprites.destroy(Weight2)
            sprites.destroy(WeigthLower1)
            sprites.destroy(WeightLower2)
            sprites.destroy(WeightUpper1)
            sprites.destroy(WeightUpper2)
        } else if (BossCooldown == 1050) {
            if (BossHealth == 3) {
                animation.runImageAnimation(
                BossXtra,
                assets.animation`TreadmillMove`,
                130,
                true
                )
            } else if (BossHealth == 2) {
                animation.runImageAnimation(
                BossXtra,
                assets.animation`TreadmillMove`,
                90,
                true
                )
            } else {
                animation.runImageAnimation(
                BossXtra,
                assets.animation`TreadmillMove`,
                50,
                true
                )
            }
            BossCooldown = 1240
        } else if (BossCooldown == 1000) {
            animation.runImageAnimation(
            BossXtra,
            assets.animation`TreadmillMove`,
            30,
            true
            )
        } else if (BossCooldown > 1000 && BossCooldown < 1050) {
            if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`MiddleFloorW1`)) {
                Jump = 0
                Jumping = 1
                BigYEET = 1
                controller.moveSprite(mySprite, 0, 0)
                Action = 2
                mySprite.setVelocity(150, -50)
                Bossfight = 0
                animation.stopAnimation(animation.AnimationTypes.All, mySprite)
            }
        } else if (BossCooldown == 10) {
            music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
        } else if (BossCooldown == 1150) {
            animation.stopAnimation(animation.AnimationTypes.All, Boss)
        } else if (BossCooldown == 1200) {
            animation.runImageAnimation(
            Boss,
            assets.animation`Boss1DoBonk`,
            50,
            false
            )
        } else if (BossCooldown == 1230) {
            if (BossHealth == 3) {
                animation.runImageAnimation(
                Boss,
                assets.animation`AnimatedBoss1`,
                120,
                true
                )
            } else if (BossHealth == 2) {
                animation.runImageAnimation(
                Boss,
                assets.animation`AnimatedBoss1`,
                100,
                true
                )
            } else {
                animation.runImageAnimation(
                Boss,
                assets.animation`AnimatedBoss1`,
                80,
                true
                )
            }
            BossCooldown = 1
        } else if (BossCooldown == 1360) {
            Vulnerable = 1
            sprites.destroy(WeakPoint)
            WeakPoint = sprites.create(assets.image`SpawnAreaHeart`, SpriteKind.WeakPoint)
            tiles.placeOnRandomTile(WeakPoint, assets.tile`GymBossTile`)
            animation.runImageAnimation(
            WeakPoint,
            assets.animation`GymBossHeart`,
            120,
            false
            )
            BossCooldown = 1
        } else if (BossCooldown == 1215) {
            music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
        }
        if (BossCooldown > 300) {
            if (BossCooldown < 900) {
                if (WeigthLower1.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`)) {
                    if (BossHealth == 3) {
                        Weight1.setVelocity(20, 0)
                        WeightUpper1.setVelocity(20, 0)
                        WeigthLower1.setVelocity(20, 0)
                        Weight2.setVelocity(15, 0)
                        WeightUpper2.setVelocity(15, 0)
                        WeightLower2.setVelocity(15, 0)
                    } else if (BossHealth == 2) {
                        Weight1.setVelocity(40, 0)
                        WeightUpper1.setVelocity(40, 0)
                        WeigthLower1.setVelocity(40, 0)
                        Weight2.setVelocity(30, 0)
                        WeightUpper2.setVelocity(30, 0)
                        WeightLower2.setVelocity(30, 0)
                    } else {
                        Weight1.setVelocity(80, 0)
                        WeightUpper1.setVelocity(80, 0)
                        WeigthLower1.setVelocity(80, 0)
                        Weight2.setVelocity(60, 0)
                        WeightUpper2.setVelocity(60, 0)
                        WeightLower2.setVelocity(60, 0)
                    }
                    Weight1.setFlag(SpriteFlag.Ghost, false)
                    Weight2.setFlag(SpriteFlag.Ghost, false)
                    WeigthLower1.setFlag(SpriteFlag.Ghost, false)
                    WeightLower2.setFlag(SpriteFlag.Ghost, false)
                }
            }
        }
    } else {
        BossCooldown = 0
    }
}
scene.onHitWall(SpriteKind.Hazard, function (sprite, location) {
    HazardWallInteraction()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.InstantDeath, function (sprite, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 1, 3946, 20, 255, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    LevelReset()
    game.setGameOverMessage(false, "PYTRACK FANT DEG")
    Course_Fail()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    on_right_button_pressed()
})
function InteractionBoss () {
    if (World == 2 && Vulnerable == 1) {
        if (Attacking == 1) {
            W2BossDamaged()
        }
    } else if (BossHealth <= 6 && BossHealth >= 3) {
        if (Attacking == 1) {
            W2BossDamaged()
        }
    } else {
        info.stopCountdown()
        Action = -1
        sprites.destroy(mySprite)
        LevelReset()
        tiles.setCurrentTilemap(tilemap`uLOSE`)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        if (World == 1) {
            game.setGameOverMessage(false, "\"Tread\"ed poorly as always")
            scene.setBackgroundImage(assets.image`UhOh1Gym`)
            pause(100)
            scene.setBackgroundImage(assets.image`UhOh2Gym`)
        } else if (World == 2) {
            game.setGameOverMessage(false, "Just stick to inanimate objects")
            scene.setBackgroundImage(assets.image`UhOh1`)
            pause(100)
            scene.setBackgroundImage(assets.image`UhOh2`)
        }
        pause(100)
        scene.setBackgroundImage(assets.image`UhOh3`)
        pause(100)
        scene.setBackgroundImage(assets.image`UhOh4`)
        pause(100)
        scene.setBackgroundImage(assets.image`UhOh5`)
        pause(3000)
        Course_Fail()
    }
}
function OLIVEEEEEEER () {
    Oliven = sprites.create(assets.image`DEN karen`, SpriteKind.Twist)
    animation.runImageAnimation(
    Oliven,
    assets.animation`Rizzler kanskje`,
    100,
    true
    )
    if (World == 1) {
        tiles.placeOnRandomTile(Oliven, assets.tile`OliverTile`)
    } else if (World == 2) {
        tiles.placeOnRandomTile(Oliven, assets.tile`OliverTileW2`)
    }
    info.setScore(0)
}
function InteractionBurger () {
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    sprites.destroy(myBURG, effects.disintegrate, 200)
    myBURG = sprites.create(assets.image`BURG`, SpriteKind.Food)
    Action = -1
    mySprite3 = sprites.create(img`
        . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 0, 0)
    controller.moveSprite(mySprite3, 0, 0)
    pause(100)
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    if (BURGate == 0) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`EliasNom_0`,
        150,
        false
        )
        pause(1200)
        music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
        pause(300)
        if (Level == 6) {
            if (World == 1) {
                pause(500)
                TransitionOUT()
                pause(2000)
                game.setGameOverMessage(true, "Burger acquired")
                game.gameOver(true)
            } else if (World == 2) {
                pause(500)
                TransitionOUT()
                pause(2000)
                game.setGameOverMessage(false, "Glemte dietten?")
                game.gameOver(false)
            }
        }
        tiles.placeOnRandomTile(myBURG, assets.tile`BURGtile0`)
        Action = 0
        controller.moveSprite(mySprite, 80, 0)
    } else if (BURGate == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`EliasNom_1`,
        150,
        false
        )
        pause(1200)
        music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
        pause(450)
        music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
        pause(1650)
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
        pause(650)
        if (Level == 6) {
            if (World == 2) {
                pause(500)
                TransitionOUT()
                pause(2000)
                game.setGameOverMessage(true, "Burger acquired")
                game.gameOver(true)
            }
        }
        tiles.placeOnRandomTile(myBURG, assets.tile`BURGtile3`)
        Action = 0
        controller.moveSprite(mySprite, 50, 0)
    } else {
        sprites.destroy(myBURG)
        animation.runImageAnimation(
        mySprite,
        assets.animation`EliasNom_2`,
        150,
        false
        )
        pause(600)
        CurrentX = mySprite.x
        CurrentY = mySprite.y
        AnimationCam = sprites.create(img`
            . 
            `, SpriteKind.Dead)
        tiles.placeOnTile(AnimationCam, mySprite.tilemapLocation())
        pause(10)
        scene.cameraFollowSprite(AnimationCam)
        pause(1000)
        for (let index = 0; index < 4; index++) {
            AnimationCam.x += -4
            pause(20)
        }
        animation.runImageAnimation(
        mySprite,
        assets.animation`Ascension`,
        3200,
        false
        )
        music.stopAllSounds()
        music.play(music.createSoundEffect(WaveShape.Noise, 3300, 1400, 255, 0, 7000, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        for (let index = 0; index < 5; index++) {
            for (let index = 0; index < 8; index++) {
                AnimationCam.x += 4
                pause(40)
            }
            for (let index = 0; index < 8; index++) {
                AnimationCam.x += -4
                pause(40)
            }
        }
        for (let index = 0; index < 10; index++) {
            for (let index = 0; index < 8; index++) {
                AnimationCam.x += 4
                pause(20)
            }
            for (let index = 0; index < 8; index++) {
                AnimationCam.x += -4
                pause(20)
            }
        }
        music.stopAllSounds()
        music.play(music.createSoundEffect(WaveShape.Noise, 3300, 1400, 255, 0, 3500, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        for (let index = 0; index < 20; index++) {
            for (let index = 0; index < 8; index++) {
                AnimationCam.x += 4
                pause(10)
            }
            for (let index = 0; index < 8; index++) {
                AnimationCam.x += -4
                pause(10)
            }
        }
        for (let index = 0; index < 4; index++) {
            AnimationCam.x += 4
            pause(10)
        }
        music.stopAllSounds()
        music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
        mySprite.setImage(assets.image`NadaNix`)
        scene.setBackgroundImage(assets.image`UhOh5`)
        tiles.setCurrentTilemap(tilemap`AscensionCutscene`)
        tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
        scene.cameraFollowSprite(mySprite)
        pause(3000)
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
        mySprite.setImage(assets.image`EliasIdle_3`)
        tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
        scene.cameraFollowSprite(mySprite)
        mySprite.startEffect(effects.starField, 3000)
        scene.setBackgroundImage(assets.image`Spotlight`)
        sprites.destroy(AnimationCam)
        pause(3000)
        scene.setBackgroundImage(img`
            . 
            `)
        tiles.setCurrentTilemap(tilemap`level0`)
        mySprite.setImage(assets.image`EliasIdle_3`)
        mySprite.setPosition(CurrentX, CurrentY)
        scene.centerCameraAt(CurrentX, CurrentY)
        Action = 0
        controller.moveSprite(mySprite, 70, 0)
        scene.cameraFollowSprite(mySprite)
    }
    sprites.destroy(mySprite3)
    BURGate += 1
}
function CheckForCutscene () {
    if (Cutscene == 1) {
        if (Level == 6) {
            if (World == 1) {
                music.stopAllSounds()
                Action = -1
                sprites.destroy(mySprite)
                mySprite = sprites.create(assets.image`EliasIdle_0`, SpriteKind.Player)
                controller.moveSprite(mySprite, 0, 0)
                tiles.placeOnRandomTile(mySprite, assets.tile`GymPlaceTile`)
                WeakPoint = sprites.create(assets.image`SpawnAreaHeart`, SpriteKind.WeakPoint)
                scene.cameraFollowSprite(Boss)
                Cutscene = 0
                animation.runImageAnimation(
                mySprite,
                assets.animation`EliasStroll_R0`,
                120,
                true
                )
                mySprite.y += -8
                for (let index = 0; index < 140; index++) {
                    mySprite.setVelocity(100, 0)
                    pause(1)
                }
                animation.runImageAnimation(
                mySprite,
                assets.animation`EliasStop_R0`,
                120,
                false
                )
                pause(2000)
                animation.runImageAnimation(
                BossXtra,
                assets.animation`TreadmillMove`,
                130,
                true
                )
                TreadmillSpeed = 20
                BossAttack = 0
                Bossfight = 1
                BossHealth = 3
                Boss.setKind(SpriteKind.Boss)
                Action = 0
                Music = 0
                controller.moveSprite(mySprite, 100, 0)
                animation.runImageAnimation(
                Boss,
                assets.animation`Boss1Entrance`,
                100,
                false
                )
                pause(1200)
                animation.runImageAnimation(
                Boss,
                assets.animation`AnimatedBoss1`,
                100,
                true
                )
            } else if (World == 2) {
                animation.stopAnimation(animation.AnimationTypes.All, mySprite)
                Action = -1
                controller.moveSprite(mySprite, 0, 0)
                tiles.placeOnRandomTile(mySprite, assets.tile`W2PlaceTile`)
                scene.centerCameraAt(BossXtra.x, BossXtra.y)
                tiles.placeOnRandomTile(BossXtra, assets.tile`Start`)
                tiles.placeOnRandomTile(BossXtra2, assets.tile`Start`)
                tiles.placeOnRandomTile(Boss, assets.tile`W2BossTile`)
                tiles.placeOnRandomTile(Doll_1, assets.tile`W2BossTile`)
                tiles.placeOnRandomTile(Doll_2, assets.tile`W2BossTile`)
                Boss.y += 48
                Boss.x += 32
                Doll_1.y += 48
                Doll_1.x += 16
                Doll_2.y += 48
                Doll_2.x += 48
                Cutscene = 0
                pause(100)
                if (game.ask("Watch cutscene? (Yes/No)")) {
                    if (BURGrejected != 0) {
                        pause(2000)
                        game.setDialogTextColor(7)
                        game.showLongText("Huh?", DialogLayout.Top)
                        pause(500)
                        game.showLongText("Hvor...", DialogLayout.Top)
                        game.setDialogTextColor(4)
                        game.showLongText("...Ble det av...", DialogLayout.Top)
                        game.setDialogTextColor(12)
                        game.showLongText("...Fetsoen?", DialogLayout.Top)
                        pause(500)
                        game.showLongText("Gikk du glipp av burgeren?", DialogLayout.Top)
                        pause(500)
                        game.setDialogTextColor(4)
                        game.showLongText("Det skal da ikke være mulig", DialogLayout.Top)
                        pause(500)
                        game.setDialogTextColor(7)
                        game.showLongText("...", DialogLayout.Top)
                        pause(500)
                        game.setDialogTextColor(12)
                        game.showLongText("Dere...", DialogLayout.Top)
                        pause(500)
                        game.showLongText("Vi burde lowkey banke han uansett", DialogLayout.Top)
                        pause(500)
                        game.setDialogTextColor(4)
                        game.showLongText("Følte...", DialogLayout.Top)
                        pause(1000)
                    } else {
                        pause(2000)
                        game.setDialogTextColor(7)
                        game.showLongText("Æsj", DialogLayout.Top)
                        pause(500)
                        game.showLongText("Du har...", DialogLayout.Top)
                        game.setDialogTextColor(4)
                        game.showLongText("...IKKE dusjet...", DialogLayout.Top)
                        game.setDialogTextColor(12)
                        game.showLongText("...På veldig lenge", DialogLayout.Top)
                        pause(500)
                        game.showLongText("Taper", DialogLayout.Top)
                        pause(500)
                        game.setDialogTextColor(4)
                        game.showLongText("Ro litt ned på mcdonaldsen da", DialogLayout.Top)
                        pause(500)
                        game.setDialogTextColor(7)
                        game.showLongText("Feite faen", DialogLayout.Top)
                        pause(500)
                        game.setDialogTextColor(12)
                        game.showLongText("Dere...", DialogLayout.Top)
                        pause(500)
                        game.showLongText("Vi burde lowkey banke han", DialogLayout.Top)
                        pause(500)
                        game.setDialogTextColor(4)
                        game.showLongText("Følte...", DialogLayout.Top)
                        pause(1000)
                        game.setDialogTextColor(6)
                        game.showLongText("...", DialogLayout.Top)
                        pause(1000)
                        game.setDialogTextColor(7)
                        game.showLongText("Bro har aldri snakket med en jente i sitt liv", DialogLayout.Top)
                        pause(500)
                        game.setDialogTextColor(4)
                        game.showLongText("Ja la oss gå og suge pannen hans", DialogLayout.Top)
                        pause(500)
                        game.setDialogTextColor(12)
                        game.showLongText("Men dere", DialogLayout.Top)
                        pause(2000)
                        game.showLongText("Jeg er 010", DialogLayout.Top)
                        pause(500)
                        game.setDialogTextColor(7)
                        game.showLongText("Shit da vil han ha deg", DialogLayout.Top)
                        pause(500)
                        game.setDialogTextColor(4)
                        game.showLongText("Fakk vi må banke han med en gang", DialogLayout.Top)
                    }
                } else {
                	
                }
                pause(200)
                animation.runImageAnimation(
                Boss,
                assets.animation`W2Boss1Laugh`,
                150,
                true
                )
                animation.runImageAnimation(
                Doll_1,
                assets.animation`W2Boss2Laugh`,
                150,
                true
                )
                animation.runImageAnimation(
                Doll_2,
                assets.animation`W2Boss3Laugh`,
                150,
                true
                )
                pause(2000)
                animation.runImageAnimation(
                Doll_1,
                assets.animation`W2Boss2WarpOut`,
                70,
                false
                )
                animation.runImageAnimation(
                Doll_2,
                assets.animation`W2Boss3WarpOut`,
                70,
                false
                )
                if (BURGrejected != 0) {
                    controller.moveSprite(mySprite, 100, 0)
                } else {
                    controller.moveSprite(mySprite, 80, 0)
                }
                Action = 0
                Bossfight = 1
                BossHealth = 11
                Music = 0
                BossAttack3 = 0
                BossReset = 0
                pause(3000)
                sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            } else if (World == 3) {
            	
            } else if (World == 4) {
            	
            } else if (World == 5) {
            	
            } else {
            	
            }
        }
    } else if (Cutscene == 2) {
        if (World == 2) {
            Action = -1
            controller.moveSprite(mySprite, 0, 0)
            Bossfight = 0
            Cutscene = 0
            Boss.setVelocity(0, 0)
            BossXtra.setVelocity(0, 0)
            BossXtra2.setVelocity(0, 0)
            tiles.placeOnRandomTile(Boss, assets.tile`W2BossTile`)
            tiles.placeOnRandomTile(BossXtra, assets.tile`W2BossTile`)
            tiles.placeOnRandomTile(BossXtra2, assets.tile`W2BossTile`)
            Boss.y += -16
            BossXtra.x += 32
            BossXtra2.x += -32
            pause(1000)
            animation.runImageAnimation(
            Boss,
            assets.animation`W2Boss3WarpInn`,
            70,
            false
            )
            animation.runImageAnimation(
            BossXtra,
            assets.animation`W2Boss2WarpInn`,
            70,
            false
            )
            animation.runImageAnimation(
            BossXtra2,
            assets.animation`W2Boss1WarpInn`,
            70,
            false
            )
            pause(3000)
            if (BURGrejected != 0) {
                game.setDialogTextColor(7)
                game.showLongText("Din tusling", DialogLayout.Top)
                pause(500)
                game.setDialogTextColor(12)
                game.showLongText("Til normalen ville vi banket deg...", DialogLayout.Top)
                game.setDialogTextColor(4)
                game.showLongText("...Men denne dietten burde belønnes...", DialogLayout.Top)
                game.setDialogTextColor(7)
                game.showLongText("...Så vi lar deg være", DialogLayout.Top)
                pause(500)
                game.setDialogTextColor(12)
                game.showLongText("Denne gangen...", DialogLayout.Top)
                pause(500)
                game.showLongText("Men dette endrer ikke noe", DialogLayout.Top)
                pause(500)
                game.setDialogTextColor(4)
                game.showLongText("Du vil fortsatt være...", DialogLayout.Top)
                game.showLongText("En stygg...", DialogLayout.Top)
                game.setDialogTextColor(7)
                game.showLongText("...Liten...", DialogLayout.Top)
                game.setDialogTextColor(12)
                game.showLongText("...Taper!", DialogLayout.Top)
                pause(500)
                animation.runImageAnimation(
                BossXtra2,
                assets.animation`W2Boss1Laugh`,
                150,
                true
                )
                animation.runImageAnimation(
                BossXtra,
                assets.animation`W2Boss2Laugh`,
                150,
                true
                )
                animation.runImageAnimation(
                Boss,
                assets.animation`W2Boss3Laugh`,
                150,
                true
                )
                pause(2000)
            } else {
                game.setDialogTextColor(7)
                game.showLongText("Din tusling", DialogLayout.Top)
                pause(500)
                game.setDialogTextColor(12)
                game.showLongText("Prøv å lukte godt challenge umulig", DialogLayout.Top)
                pause(500)
                game.setDialogTextColor(4)
                game.showLongText("Prøv å veie under to tonn challenge umulig", DialogLayout.Top)
                pause(500)
                game.setDialogTextColor(7)
                game.showLongText("Prøv å kunne snakke med jenter challenge umulig", DialogLayout.Top)
                pause(500)
                game.setDialogTextColor(12)
                game.showLongText("Nei faen i helvete", DialogLayout.Top)
                pause(500)
                game.showLongText("Vi må bruke crispr teknologi for å kutte ned kaloriinntaket ditt", DialogLayout.Top)
                pause(500)
                game.setDialogTextColor(4)
                game.showLongText("La oss banke han girls", DialogLayout.Top)
                pause(500)
                game.showLongText("Fordi som dere vet...", DialogLayout.Top)
                pause(500)
                game.showLongText("...Hevnen er best servert klissete", DialogLayout.Top)
                Boss.follow(mySprite, 10)
                BossXtra.follow(mySprite, 10)
                BossXtra2.follow(mySprite, 10)
                pause(3000)
                Boss.follow(mySprite, 0)
                BossXtra.follow(mySprite, 0)
                BossXtra2.follow(mySprite, 0)
                animation.runImageAnimation(
                mySprite,
                assets.animation`WhyElias`,
                50,
                true
                )
                music.stopAllSounds()
                music.play(music.createSong(assets.song`BigOlSplosion`), music.PlaybackMode.LoopingInBackground)
                pause(10000)
                animation.runImageAnimation(
                mySprite,
                assets.animation`JustWhy`,
                100,
                false
                )
                pause(300)
                music.stopAllSounds()
                pause(3000)
                game.showLongText("...", DialogLayout.Top)
                pause(500)
                game.setDialogTextColor(12)
                game.showLongText("...", DialogLayout.Top)
                pause(500)
                game.setDialogTextColor(7)
                game.showLongText("...", DialogLayout.Top)
                pause(500)
                game.showLongText("Oi...", DialogLayout.Top)
                pause(500)
                game.setDialogTextColor(4)
                game.showLongText("Livet er som en bursdagskake", DialogLayout.Top)
                pause(500)
                game.showLongText("Og lyset mitt er blåst ut", DialogLayout.Top)
                pause(500)
                game.setDialogTextColor(7)
                game.showLongText("Din ekle faen", DialogLayout.Top)
                pause(500)
                game.setDialogTextColor(12)
                game.showLongText("Jeg hadde egentlig lyst å elta forward tilte deg til helvete vekk", DialogLayout.Top)
                pause(500)
                game.showLongText("Men etter det der...", DialogLayout.Top)
                pause(500)
                game.showLongText("...Så er jeg hverken søt eller farlig", DialogLayout.Top)
                pause(500)
                game.showLongText("Jeg er bare skuffet", DialogLayout.Top)
                pause(500)
                game.showLongText("Gå og dø", DialogLayout.Top)
                pause(500)
                game.setDialogTextColor(4)
                game.showLongText("Lev og lær, henger på kant-", DialogLayout.Top)
                game.setDialogTextColor(12)
                game.showLongText("Hold kjeft", DialogLayout.Top)
            }
            animation.runImageAnimation(
            Boss,
            assets.animation`W2Boss3WarpOut`,
            30,
            false
            )
            animation.runImageAnimation(
            BossXtra,
            assets.animation`W2Boss2WarpOut`,
            30,
            false
            )
            animation.runImageAnimation(
            BossXtra2,
            assets.animation`W2Boss1WarpOut`,
            30,
            false
            )
            pause(2000)
            game.showLongText("Ta deg en burger!", DialogLayout.Top)
            pause(1)
            controller.moveSprite(mySprite, 80, 0)
            Action = 0
            myBURG = sprites.create(assets.image`BURG`, SpriteKind.Food)
            tiles.placeOnRandomTile(myBURG, assets.tile`BURGtile0`)
            myBURG.setFlag(SpriteFlag.GhostThroughWalls, true)
            myBURG.y += 8
            myBURG.setVelocity(-100, 0)
            pause(20000)
            if (BURGrejected != 0) {
                info.setScore(8789)
            } else {
                info.setScore(4013)
            }
            game.setGameOverMessage(true, "Rejecting BURG?!")
            game.gameOver(true)
        } else if (World == 3) {
        	
        } else if (World == 4) {
        	
        } else if (World == 5) {
        	
        } else {
        	
        }
    } else if (Cutscene == 3) {
    	
    }
}
function ActivateTrueEnd () {
    Action = -1
    Jumping = 1
    mySprite.setVelocity(0, 0)
    if (World == 1) {
        tiles.placeOnRandomTile(mySprite, assets.tile`GymSpecialend0`)
    } else {
        tiles.placeOnRandomTile(mySprite, assets.tile`Specialend`)
    }
    controller.moveSprite(mySprite, 0, 0)
    mySprite2 = sprites.create(img`
        . 
        `, SpriteKind.Dead)
    tiles.placeOnTile(mySprite2, mySprite.tilemapLocation())
    if (Level != 6) {
        scene.cameraFollowSprite(mySprite2)
    }
    pause(500)
    animation.runImageAnimation(
    TrueEnd,
    assets.animation`HeFree1`,
    100,
    false
    )
    pause(600)
    info.stopCountdown()
    sprites.destroy(mySprite, effects.halo, 1000)
    music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.UntilDone)
    animation.runImageAnimation(
    TrueEnd,
    assets.animation`HeFree2`,
    100,
    false
    )
    pause(2000)
    TypeWin = 2
    game.setGameOverMessage(true, "Level Cleared!")
    if (Level == 6) {
        TypeWin = 3
        info.setScore(9307)
        game.setGameOverMessage(true, "Rejecting BURG?!")
    }
    Course_Win()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Treadmill, function (sprite, otherSprite) {
    Berry1.vy = 0
    Berry1.vx = TreadmillSpeed * 2.5
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.EvilProjectile, function (sprite, otherSprite) {
    InteractionEvilProj()
})
scene.onOverlapTile(SpriteKind.Doll1, assets.tile`U dead`, function (sprite, location) {
    Doll_1.y = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`GymCutsceneTile`, function (sprite, location) {
    Cutscene = 1
})
function W2Boss2Action () {
    Boss.vy = -40
    pause(1250)
    Boss.vy = 0
    animation.runImageAnimation(
    Boss,
    assets.animation`W2Boss2AttackPrep`,
    300,
    false
    )
    pause(900)
    animation.runImageAnimation(
    Boss,
    assets.animation`W2Boss2Attacking`,
    70,
    true
    )
    BossAttack2 = 1
    Vulnerable = 1
    Boss.vy = 1
    pause(1000)
    while (BossAttack2 == 1) {
        PipeBomb = sprites.create(assets.image`PipeBomb`, SpriteKind.PipeBomb)
        if (BossAttack2 == 1) {
            if (Math.percentChance(50)) {
                if (Math.percentChance(50)) {
                    if (Math.percentChance(50)) {
                        tiles.placeOnTile(PipeBomb, tiles.getTileLocation(40, 6))
                    } else {
                        tiles.placeOnTile(PipeBomb, tiles.getTileLocation(41, 6))
                    }
                } else {
                    if (Math.percentChance(50)) {
                        tiles.placeOnTile(PipeBomb, tiles.getTileLocation(42, 6))
                    } else {
                        tiles.placeOnTile(PipeBomb, tiles.getTileLocation(43, 6))
                    }
                }
            } else {
                if (Math.percentChance(50)) {
                    if (Math.percentChance(50)) {
                        tiles.placeOnTile(PipeBomb, tiles.getTileLocation(44, 6))
                    } else {
                        tiles.placeOnTile(PipeBomb, tiles.getTileLocation(46, 6))
                    }
                } else {
                    if (Math.percentChance(50)) {
                        tiles.placeOnTile(PipeBomb, tiles.getTileLocation(47, 6))
                    } else {
                        tiles.placeOnTile(PipeBomb, tiles.getTileLocation(48, 6))
                    }
                }
            }
        }
        PipeBomb.vy = 200
        pause(500)
        if (BossAttack2 == 1) {
            Pipebomb2 = sprites.create(assets.image`PipeBomb`, SpriteKind.PipeBomb)
            if (Math.percentChance(50)) {
                if (Math.percentChance(50)) {
                    if (Math.percentChance(50)) {
                        tiles.placeOnTile(Pipebomb2, tiles.getTileLocation(40, 6))
                    } else {
                        tiles.placeOnTile(Pipebomb2, tiles.getTileLocation(41, 6))
                    }
                } else {
                    if (Math.percentChance(50)) {
                        tiles.placeOnTile(Pipebomb2, tiles.getTileLocation(42, 6))
                    } else {
                        tiles.placeOnTile(Pipebomb2, tiles.getTileLocation(43, 6))
                    }
                }
            } else {
                if (Math.percentChance(50)) {
                    if (Math.percentChance(50)) {
                        tiles.placeOnTile(Pipebomb2, tiles.getTileLocation(44, 6))
                    } else {
                        tiles.placeOnTile(Pipebomb2, tiles.getTileLocation(46, 6))
                    }
                } else {
                    if (Math.percentChance(50)) {
                        tiles.placeOnTile(Pipebomb2, tiles.getTileLocation(47, 6))
                    } else {
                        tiles.placeOnTile(Pipebomb2, tiles.getTileLocation(48, 6))
                    }
                }
            }
            Pipebomb2.vy = 200
            pause(750)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.WeakPoint, function (sprite, otherSprite) {
    AttackingWeakpoint()
})
function Course_Fail () {
    if (Level == 0) {
        TransitionOUT()
        World_Select()
    } else {
        if (Retry == 1) {
            if (game.ask("Retry?")) {
                Game = 1
                if (Level == 6) {
                    BossReset = 1
                    if (World == 1) {
                        TreadmillSpeed = 0
                        BigYEET = 0
                        BossAttack = 0
                        Bossfight = 0
                        BossHealth = 0
                        sprites.destroyAllSpritesOfKind(SpriteKind.Boss)
                        sprites.destroyAllSpritesOfKind(SpriteKind.Treadmill)
                    }
                    if (World == 2) {
                        BossAttack = 0
                        Bossfight = 0
                        BossHealth = 0
                        sprites.destroyAllSpritesOfKind(SpriteKind.Boss)
                        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
                        sprites.destroyAllSpritesOfKind(SpriteKind.Dead)
                        sprites.destroyAllSpritesOfKind(SpriteKind.PipeBomb)
                    }
                }
                if (Level == 5) {
                    sprites.destroyAllSpritesOfKind(SpriteKind.Twist)
                    NOPE = 0
                }
                ChooseLevel = 1
                LevelReset()
                MenuConfirm()
                Action = 0
                StartingLevel = 0
                if (Level == 6) {
                    if (World == 1) {
                        tiles.placeOnRandomTile(mySprite, assets.tile`GymCutsceneTile`)
                    } else if (World == 2) {
                        BossAttack2 = 0
                        BossAttack3 = 0
                        tiles.placeOnRandomTile(mySprite, assets.tile`W2CutsceneTile`)
                    }
                }
            } else {
                game.gameOver(false)
            }
        } else {
            game.gameOver(false)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Twist, function (sprite, otherSprite) {
    snakkmedDENkaren()
})
function W2Boss2Action2 () {
    BossAttack2 = 1
    pause(1000)
    while (BossAttack2 == 1) {
        PipeBomb = sprites.create(assets.image`PipeBomb`, SpriteKind.PipeBomb)
        if (BossAttack2 == 1) {
            if (Math.percentChance(50)) {
                tiles.placeOnTile(PipeBomb, tiles.getTileLocation(40, 6))
            } else {
                tiles.placeOnTile(PipeBomb, tiles.getTileLocation(48, 6))
            }
        }
        PipeBomb.vy = 100
        if (BossHealth == 2) {
            if (BossAttack2 == 1) {
                pause(1000)
                Pipebomb2 = sprites.create(assets.image`PipeBomb`, SpriteKind.PipeBomb)
                if (Math.percentChance(50)) {
                    tiles.placeOnTile(Pipebomb2, tiles.getTileLocation(40, 6))
                } else {
                    tiles.placeOnTile(Pipebomb2, tiles.getTileLocation(48, 6))
                }
                Pipebomb2.vy = 100
            }
        }
        pause(2500)
    }
}
function InteractionExplosion () {
    game.setGameOverMessage(false, "Total BOOMER over here")
    if (Bossfight == 1) {
        game.setGameOverMessage(false, "Just stick to inanimate objects")
        Wait = 0
    } else {
        scene.centerCameraAt(mySprite.x, mySprite.y)
    }
    info.stopCountdown()
    Action = -1
    mySprite.setVelocity(0, 0)
    sprites.destroy(mySprite, effects.ashes, 100)
    pause(3000)
    Course_Fail()
}
function SpawnBasketball13 () {
    Ball1 = sprites.create(assets.image`Ball`, SpriteKind.BouncyBall)
    Ball2 = sprites.create(assets.image`Ball`, SpriteKind.BouncyBall)
    Ball3 = sprites.create(assets.image`Ball`, SpriteKind.BouncyBall)
    animation.runImageAnimation(
    Ball1,
    assets.animation`BouncingBall`,
    50,
    true
    )
    animation.runImageAnimation(
    Ball2,
    assets.animation`BouncingBall`,
    50,
    true
    )
    animation.runImageAnimation(
    Ball3,
    assets.animation`BouncingBall`,
    50,
    true
    )
    tiles.placeOnRandomTile(Ball1, assets.tile`BallTile0`)
    tiles.placeOnRandomTile(Ball2, assets.tile`BallTile1`)
    tiles.placeOnRandomTile(Ball3, assets.tile`BallTile3`)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    on_down_button_pressed()
})
function World_Select () {
    World = 1
    ChooseWorld = 1
    Game = 1
    Action = 0
    sprites.destroy(mySprite)
    sprites.destroy(TrueEnd)
    sprites.destroy(trashcompactor)
    sprites.destroy(myBURG)
    sprites.destroy(Berry1)
    if (BURGate == 1) {
        mySprite = sprites.create(assets.image`EliasIdle_1`, SpriteKind.Player)
        controller.moveSprite(mySprite, 80, 0)
    } else if (BURGate == 2) {
        mySprite = sprites.create(assets.image`EliasIdle_2`, SpriteKind.Player)
        controller.moveSprite(mySprite, 50, 0)
    } else if (BURGate == 3) {
        mySprite = sprites.create(assets.image`EliasIdle_3`, SpriteKind.Player)
        controller.moveSprite(mySprite, 70, 0)
    } else {
        mySprite = sprites.create(assets.image`EliasIdle_0`, SpriteKind.Player)
        controller.moveSprite(mySprite, 100, 0)
    }
    tiles.setCurrentTilemap(tilemap`TittleMap`)
    scene.setBackgroundImage(assets.image`WorldSelect0`)
    tiles.placeOnRandomTile(mySprite, assets.tile`MenuFloor`)
    scene.cameraFollowSprite(mySprite)
    TransitionIN()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Doll2, function (sprite, otherSprite) {
    if (Attacking == 1) {
        sprites.destroy(otherSprite, effects.fire, 200)
        if (Level == 5) {
            info.changeScoreBy(2)
            pause(5000)
        }
        if (Bossfight == 0) {
            Doll_2 = sprites.create(assets.image`Doll`, SpriteKind.Doll2)
            animation.runImageAnimation(
            Doll_2,
            assets.animation`DollWalk`,
            175,
            true
            )
            tiles.placeOnRandomTile(Doll_2, assets.tile`DollSpawnTile0`)
            Doll_2.follow(mySprite, 100)
        }
    } else {
        info.stopCountdown()
        Action = -1
        sprites.destroy(mySprite)
        LevelReset()
        tiles.setCurrentTilemap(tilemap`uLOSE`)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        scene.setBackgroundImage(assets.image`UhOh1`)
        pause(100)
        scene.setBackgroundImage(assets.image`UhOh2`)
        pause(100)
        scene.setBackgroundImage(assets.image`UhOh3`)
        pause(100)
        scene.setBackgroundImage(assets.image`UhOh4`)
        pause(100)
        scene.setBackgroundImage(assets.image`UhOh5`)
        pause(3000)
        game.setGameOverMessage(false, "Dolls more agile than you?")
        Course_Fail()
    }
})
function W2BossDamaged () {
    if (BossHealth > 9) {
        BossAttack += -1
        Wait = 1
        Vulnerable = 0
        animation.runImageAnimation(
        Boss,
        assets.animation`W2Boss1Hurt`,
        100,
        true
        )
        pause(1000)
        BossHealth += -1
        Wait = 0
    } else if (BossHealth > 6) {
        BossAttack2 += -1
        Vulnerable = 0
        animation.runImageAnimation(
        Boss,
        assets.animation`W2Boss2Hurt`,
        100,
        true
        )
        pause(1000)
        BossHealth += -1
        if (BossHealth != 6) {
            W2Boss2Action()
        }
    } else if (BossHealth > 2) {
        BossAttack3 = 0
        Vulnerable = 0
        BossHealth += -1
        animation.runImageAnimation(
        Boss,
        assets.animation`W2Boss3Hurt`,
        100,
        true
        )
    } else if (BossHealth > 1) {
        BossAttack2 += -1
        Vulnerable = 0
        animation.runImageAnimation(
        BossXtra2,
        assets.animation`W2Boss2Hurt`,
        100,
        true
        )
        pause(1000)
        BossHealth += -1
    } else if (BossHealth > 0) {
        BossAttack += -1
        Wait = 1
        Vulnerable = 0
        animation.runImageAnimation(
        BossXtra,
        assets.animation`W2Boss1Hurt`,
        100,
        true
        )
        pause(1000)
        BossHealth += -1
    }
    if (BossHealth == 9) {
        Boss.setKind(SpriteKind.Dead)
        animation.runImageAnimation(
        Boss,
        assets.animation`W2Boss1WarpOut`,
        70,
        false
        )
        pause(2035)
        Boss = sprites.create(assets.image`SmolNothing`, SpriteKind.Boss)
        Boss.ay = 0
        tiles.placeOnRandomTile(Boss, assets.tile`W2BossTile`)
        animation.runImageAnimation(
        Boss,
        assets.animation`W2Boss2WarpInn`,
        70,
        false
        )
        pause(200)
        BossHealth += -1
        W2Boss2Action()
    } else if (BossHealth == 6) {
        Boss.setKind(SpriteKind.Dead)
        animation.runImageAnimation(
        Boss,
        assets.animation`W2Boss2WarpOut`,
        70,
        false
        )
        pause(2035)
        SwitchA = 0
        Boss = sprites.create(assets.image`SmolNothing`, SpriteKind.Boss)
        tiles.placeOnRandomTile(Boss, assets.tile`W2PlaceTile`)
        animation.runImageAnimation(
        Boss,
        assets.animation`W2Boss3WarpInn`,
        70,
        false
        )
        pause(1000)
        BossHealth += -1
        animation.runImageAnimation(
        Boss,
        assets.animation`W2Boss3Summon`,
        70,
        false
        )
        pause(420)
        Doll_1 = sprites.create(assets.image`Doll`, SpriteKind.Doll1)
        animation.runImageAnimation(
        Doll_1,
        assets.animation`DollWalk`,
        175,
        true
        )
        tiles.placeOnTile(Doll_1, Boss.tilemapLocation())
        Doll_1.follow(mySprite, 30)
        Doll_1.setVelocity(0, 180)
        BossAttack3 = 1
        pause(2000)
        W2Boss3Action()
    } else if (BossHealth == 3) {
        pause(5000)
        tiles.placeOnRandomTile(Boss, assets.tile`W2BossTile`)
        Boss.y += 48
        Boss.x += 32
        animation.runImageAnimation(
        Boss,
        assets.animation`W2Boss3WarpInn`,
        70,
        false
        )
        pause(1000)
        animation.runImageAnimation(
        Boss,
        assets.animation`W2Boss3Summon`,
        70,
        false
        )
        pause(420)
        BossXtra = sprites.create(assets.image`W2Boss1`, SpriteKind.Hazard)
        BossXtra.ax = 5
        animation.runImageAnimation(
        BossXtra,
        assets.animation`W2Boss1Attack`,
        100,
        true
        )
        tiles.placeOnTile(BossXtra, Boss.tilemapLocation())
        pause(2000)
        tiles.placeOnRandomTile(Boss, assets.tile`W2BossTile`)
        animation.runImageAnimation(
        Boss,
        assets.animation`W2Boss3WarpInn`,
        70,
        false
        )
        pause(1000)
        animation.runImageAnimation(
        Boss,
        assets.animation`W2Boss3Summon`,
        70,
        false
        )
        pause(420)
        BossXtra2 = sprites.create(assets.image`W2Boss2`, SpriteKind.Hazard)
        tiles.placeOnTile(BossXtra2, Boss.tilemapLocation())
        BossXtra2.vy = -40
        pause(1250)
        BossXtra2.vy = 0
        animation.runImageAnimation(
        BossXtra2,
        assets.animation`W2Boss2AttackPrep`,
        300,
        false
        )
        pause(900)
        animation.runImageAnimation(
        BossXtra2,
        assets.animation`W2Boss2Attacking`,
        70,
        true
        )
        W2Boss2Action2()
    } else if (BossHealth == 2) {
        Boss.setKind(SpriteKind.Dead)
        BossXtra2.setKind(SpriteKind.Boss)
        pause(2000)
        Vulnerable = 1
        SwitchA = 0
    } else if (BossHealth == 1) {
        animation.runImageAnimation(
        BossXtra2,
        assets.animation`W2Boss2WarpOut`,
        70,
        false
        )
        BossXtra2.setKind(SpriteKind.Dead)
        BossXtra.setKind(SpriteKind.Boss)
        BossXtra.ax = 10
    } else if (BossHealth == 0) {
        if (BossReset == 0) {
            animation.runImageAnimation(
            BossXtra,
            assets.animation`W2Boss1WarpOut`,
            70,
            false
            )
            pause(3000)
            Cutscene = 2
        }
    }
}
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`SpikeLeftWall`, function (sprite, location) {
    sprites.destroy(Berry1, effects.disintegrate, 1000)
})
function SpawnWeight12 () {
    WeightUpper1 = sprites.create(assets.image`WeightUpper`, SpriteKind.SolidTop)
    WeigthLower1 = sprites.create(assets.image`WeightLower`, SpriteKind.Solid)
    WeightUpper1.setFlag(SpriteFlag.GhostThroughWalls, true)
    tiles.placeOnRandomTile(WeightUpper1, assets.tile`WeigthUpper`)
    tiles.placeOnRandomTile(WeigthLower1, assets.tile`WeigthLower1`)
    Weight1 = sprites.create(assets.image`Weight`, SpriteKind.Solid)
    animation.runImageAnimation(
    Weight1,
    assets.animation`WeightAnimated`,
    100,
    true
    )
    tiles.placeOnRandomTile(Weight1, assets.tile`Weigth1`)
    Weight1.setVelocity(-50, 0)
    WeightUpper1.setVelocity(-50, 0)
    WeigthLower1.setVelocity(-50, 0)
    WeightUpper2 = sprites.create(assets.image`WeightUpper`, SpriteKind.SolidTop)
    WeightLower2 = sprites.create(assets.image`WeightLower`, SpriteKind.Solid)
    WeightUpper2.setFlag(SpriteFlag.GhostThroughWalls, true)
    tiles.placeOnRandomTile(WeightUpper2, assets.tile`WeigthUpper2`)
    tiles.placeOnRandomTile(WeightLower2, assets.tile`WeigthLower2`)
    Weight2 = sprites.create(assets.image`Weight`, SpriteKind.Solid)
    animation.runImageAnimation(
    Weight2,
    assets.animation`WeightAnimated`,
    100,
    true
    )
    tiles.placeOnRandomTile(Weight2, assets.tile`Weigth2`)
    Weight2.setVelocity(-50, 0)
    WeightUpper2.setVelocity(-50, 0)
    WeightLower2.setVelocity(-50, 0)
}
function WeightsDoTurn () {
    if (World == 1) {
        if (Level >= 3 && Level <= 5) {
            if (ChooseLevel == 0) {
                if (WeightLower2.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`)) {
                    if (Weight2.vx < 0) {
                        Weight2.setVelocity(0, 0)
                        WeightUpper2.setVelocity(0, 0)
                        WeightUpper2.setVelocity(0, 0)
                        Weight2.x += 1
                        WeightUpper2.x += 1
                        WeightLower2.x += 1
                        Weight2.setVelocity(50, 0)
                        WeightUpper2.setVelocity(50, 0)
                        WeightLower2.setVelocity(50, 0)
                    } else if (Weight2.vx > 0) {
                        Weight2.setVelocity(0, 0)
                        WeightUpper2.setVelocity(0, 0)
                        WeightLower2.setVelocity(0, 0)
                        Weight2.x += -1
                        WeightUpper2.x += -1
                        WeightLower2.x += -1
                        Weight2.setVelocity(-50, 0)
                        WeightUpper2.setVelocity(-50, 0)
                        WeightLower2.setVelocity(-50, 0)
                    } else {
                    	
                    }
                }
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Treadmill, function (sprite, otherSprite) {
    mySprite.vy = 0
    Give_jump()
    mySprite.vy = 0
    HittingGround_Bounce()
    mySprite.vy = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Hazard, function (sprite, otherSprite) {
    InteractionHazard()
})
function W2Boss1Action () {
    if (World == 2) {
        if (Bossfight == 1) {
            if (BossHealth > 9) {
                Boss.vy += 5
                if (BossAttack == 7) {
                    Wait += -1
                }
            } else if (BossHealth > 0) {
                BossXtra.vy += 5
                if (BossAttack == 7) {
                    Wait += -1
                }
            }
        }
    }
}
function SpawnLoveLetter () {
    Love_Letter = sprites.create(assets.image`LoveLetter`, SpriteKind.LoveLetter)
    tiles.placeOnRandomTile(Love_Letter, assets.tile`LoveLetterTile`)
    Love_Letter.follow(mySprite, 140)
    animation.runImageAnimation(
    Love_Letter,
    assets.animation`LoveLetterFlap`,
    100,
    true
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    InteractionBurger()
})
function TransitionIN () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Transition)
    Transition = sprites.create(assets.image`Transition`, SpriteKind.Transition)
    Transition.x = scene.cameraProperty(CameraProperty.X)
    Transition.y = scene.cameraProperty(CameraProperty.Y)
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.InBackground)
    animation.runImageAnimation(
    Transition,
    assets.animation`TransitionAnimatedIn`,
    75,
    false
    )
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`SpikeLeftWall`, function (sprite, location) {
    SpikeDoPop()
})
function on_B_button_pressed () {
    if (AttackReady == 1) {
        if (Action == 0) {
            if (BURGate == 1) {
                AttackReady = 0
                Action = 2
                Jumping += 1
                mySprite.setVelocity(0, -30)
                mySprite.y += -5
                if (MovementLeft == 1) {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasATK2_L1`,
                    50,
                    false
                    )
                } else if (MovementRight == 1) {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasATK2_R1`,
                    50,
                    false
                    )
                }
                pause(300)
                if (MovementRight == 1) {
                    projectile = sprites.createProjectileFromSprite(assets.image`BowlingTime`, mySprite, 100, 50)
                    mySprite.setVelocity(-50, -120)
                } else {
                    projectile = sprites.createProjectileFromSprite(assets.image`BowlingTime`, mySprite, -100, 50)
                    mySprite.setVelocity(50, -120)
                }
                music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
                animation.runImageAnimation(
                projectile,
                assets.animation`Bowling Ball`,
                100,
                true
                )
                pause(300)
                mySprite.setVelocity(0, 150)
            } else if (BURGate == 2) {
                if (BadBomb == 0) {
                    AttackReady = 0
                    Action = 2
                    controller.moveSprite(mySprite, 0, 0)
                    if (MovementLeft == 1) {
                        animation.runImageAnimation(
                        mySprite,
                        assets.animation`EliasATK2_L2`,
                        60,
                        false
                        )
                    } else if (MovementRight == 1) {
                        animation.runImageAnimation(
                        mySprite,
                        assets.animation`EliasATK2_R2`,
                        60,
                        false
                        )
                    }
                    pause(480)
                    BadBomb = 1
                    if (MovementRight == 1) {
                        projectile2 = sprites.createProjectileFromSprite(assets.image`BombWhichMayOrMayNotWork`, mySprite, 170, 5)
                    } else {
                        projectile2 = sprites.createProjectileFromSprite(assets.image`BombWhichMayOrMayNotWork`, mySprite, -170, 5)
                    }
                    projectile2.y += -5
                    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
                    pause(180)
                    controller.moveSprite(mySprite, 50, 0)
                }
            } else if (BURGate == 3) {
            	
            } else {
                if (FreeFall == 1) {
                	
                }
                AttackReady = 0
                Action = 2
                Jumping += 1
                mySprite.setVelocity(0, -140)
                if (controller.down.isPressed()) {
                    if (MovementLeft == 1) {
                        animation.runImageAnimation(
                        mySprite,
                        assets.animation`Elias2ATK_L0`,
                        50,
                        false
                        )
                    } else if (MovementRight == 1) {
                        animation.runImageAnimation(
                        mySprite,
                        assets.animation`Elias2ATK_R0`,
                        50,
                        false
                        )
                    }
                    pause(300)
                    projectile = sprites.createProjectileFromSprite(assets.image`Knife`, mySprite, 0, 200)
                    animation.runImageAnimation(
                    projectile,
                    assets.animation`KnifeThrown`,
                    50,
                    true
                    )
                    projectile.setFlag(SpriteFlag.AutoDestroy, false)
                    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
                    mySprite.setVelocity(0, -75)
                    Particle = sprites.create(img`
                        . 
                        `, SpriteKind.Particle)
                    tiles.placeOnTile(Particle, mySprite.tilemapLocation())
                    animation.runImageAnimation(
                    Particle,
                    assets.animation`Jump Effect`,
                    30,
                    false
                    )
                    pause(300)
                    Jumping = 0
                    pause(1)
                    sprites.destroy(Particle)
                    if (Level == 6) {
                        if (World == 1) {
                            mySprite.y += -4
                        }
                    }
                    pause(150)
                } else {
                    if (MovementLeft == 1) {
                        animation.runImageAnimation(
                        mySprite,
                        assets.animation`Elias2ATK_L0`,
                        100,
                        false
                        )
                    } else if (MovementRight == 1) {
                        animation.runImageAnimation(
                        mySprite,
                        assets.animation`Elias2ATK_R0`,
                        100,
                        false
                        )
                    }
                    pause(600)
                    projectile = sprites.createProjectileFromSprite(assets.image`Knife`, mySprite, 0, 200)
                    animation.runImageAnimation(
                    projectile,
                    assets.animation`KnifeThrown`,
                    50,
                    true
                    )
                    projectile.setFlag(SpriteFlag.AutoDestroy, false)
                    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
                    mySprite.setVelocity(0, -150)
                    Particle = sprites.create(img`
                        . 
                        `, SpriteKind.Particle)
                    tiles.placeOnTile(Particle, mySprite.tilemapLocation())
                    animation.runImageAnimation(
                    Particle,
                    assets.animation`Jump Effect`,
                    30,
                    false
                    )
                    pause(300)
                    Jumping = 0
                    pause(1)
                    sprites.destroy(Particle)
                    pause(325)
                    if (Level == 6) {
                        if (World == 1) {
                            mySprite.y += -4
                        }
                    }
                    pause(150)
                }
            }
            Action = 0
            if (BURGate == 2) {
                pause(1000)
                if (BadBomb == 1) {
                    sprites.destroy(projectile2)
                    BadBomb = 0
                }
            } else {
                FreeFall = 1
                pause(1500)
            }
            AttackReady = 1
        }
    }
}
scene.onOverlapTile(SpriteKind.Doll2, assets.tile`U dead`, function (sprite, location) {
    Doll_2.y = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BouncyBall, function (sprite, otherSprite) {
    BounceOnBouncyBall()
})
scene.onHitWall(SpriteKind.PipeBomb, function (sprite, location) {
    sprites.destroy(sprite)
    sprites.destroyAllSpritesOfKind(SpriteKind.Explosion)
    pause(1)
    PrimedPipeBomb = sprites.create(img`
        . 
        `, SpriteKind.Explosion)
    tiles.placeOnTile(PrimedPipeBomb, location)
    animation.runImageAnimation(
    PrimedPipeBomb,
    assets.animation`Kaboom`,
    75,
    false
    )
    PrimedPipeBomb.scale = 2
    PrimedPipeBomb.setVelocity(0, -50)
    if (Bossfight == 1) {
        PrimedPipeBomb.y += -16
    }
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
})
function ActivateEnd () {
    Action = -1
    Jumping = 1
    mySprite.setVelocity(0, 0)
    if (World == 1) {
        tiles.placeOnRandomTile(mySprite, assets.tile`GymEnd`)
    } else {
        tiles.placeOnRandomTile(mySprite, assets.tile`End`)
    }
    controller.moveSprite(mySprite, 0, 0)
    mySprite2 = sprites.create(img`
        . 
        `, SpriteKind.Dead)
    tiles.placeOnTile(mySprite2, mySprite.tilemapLocation())
    scene.cameraFollowSprite(mySprite2)
    pause(500)
    animation.runImageAnimation(
    trashcompactor,
    assets.animation`trashterminated`,
    100,
    false
    )
    pause(100)
    info.stopCountdown()
    sprites.destroy(mySprite, effects.ashes, 200)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    pause(2000)
    TypeWin = 1
    game.setGameOverMessage(true, "TRASH COMPACTED :D")
    Course_Win()
}
function ProjectileBossInteraction () {
    if (World == 2 && Vulnerable == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        W2BossDamaged()
    } else {
        sprites.destroyAllSpritesOfKind(SpriteKind.EvilProjectile)
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
        projectile2 = sprites.create(assets.image`BowlingTime`, SpriteKind.EvilProjectile)
        tiles.placeOnTile(projectile2, Boss.tilemapLocation())
        projectile2.setVelocity(projectile.vx * -1, projectile.vy * -1)
        animation.runImageAnimation(
        projectile2,
        assets.animation`Bowling Ball`,
        100,
        true
        )
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    }
}
function SpikeDoPop () {
    info.stopCountdown()
    Action = -1
    game.setGameOverMessage(false, "Baloon goes pop ):")
    Course_Fail()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Doll1, function (sprite, otherSprite) {
    if (Attacking == 1) {
        sprites.destroy(otherSprite, effects.fire, 200)
        if (Level == 5) {
            info.changeScoreBy(2)
            pause(5000)
        }
        Doll_1 = sprites.create(assets.image`Doll`, SpriteKind.Doll1)
        animation.runImageAnimation(
        Doll_1,
        assets.animation`DollWalk`,
        175,
        true
        )
        tiles.placeOnRandomTile(Doll_1, assets.tile`DollSpawnTile0`)
        Doll_1.follow(mySprite, 100)
    } else {
        info.stopCountdown()
        Action = -1
        sprites.destroy(mySprite)
        LevelReset()
        tiles.setCurrentTilemap(tilemap`uLOSE`)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        scene.setBackgroundImage(assets.image`UhOh1`)
        pause(100)
        scene.setBackgroundImage(assets.image`UhOh2`)
        pause(100)
        scene.setBackgroundImage(assets.image`UhOh3`)
        pause(100)
        scene.setBackgroundImage(assets.image`UhOh4`)
        pause(100)
        scene.setBackgroundImage(assets.image`UhOh5`)
        pause(3000)
        game.setGameOverMessage(false, "Dolls more agile than you?")
        Course_Fail()
    }
})
function on_down_button_pressed () {
    if (Code == 1) {
        CodeDown += 1
        if (CodeDown == 10) {
            CodeDown = 0
        }
        if (CodeDown == 1) {
            animation.runImageAnimation(
            CodeC,
            assets.animation`Code1`,
            1,
            true
            )
        } else if (CodeDown == 2) {
            animation.runImageAnimation(
            CodeC,
            assets.animation`Code2`,
            1,
            true
            )
        } else if (CodeDown == 3) {
            animation.runImageAnimation(
            CodeC,
            assets.animation`Code3`,
            1,
            true
            )
        } else if (CodeDown == 4) {
            animation.runImageAnimation(
            CodeC,
            assets.animation`Code4`,
            1,
            true
            )
        } else if (CodeDown == 5) {
            animation.runImageAnimation(
            CodeC,
            assets.animation`Code5`,
            1,
            true
            )
        } else if (CodeDown == 6) {
            animation.runImageAnimation(
            CodeC,
            assets.animation`Code6`,
            1,
            true
            )
        } else if (CodeDown == 7) {
            animation.runImageAnimation(
            CodeC,
            assets.animation`Code7`,
            1,
            true
            )
        } else if (CodeDown == 8) {
            animation.runImageAnimation(
            CodeC,
            assets.animation`Code8`,
            1,
            true
            )
        } else if (CodeDown == 9) {
            animation.runImageAnimation(
            CodeC,
            assets.animation`Code9`,
            1,
            true
            )
        } else {
            animation.runImageAnimation(
            CodeC,
            assets.animation`Code0`,
            1,
            true
            )
        }
    } else {
        MenuDUp()
        if (Action == 0) {
            if (BURGate == 3) {
                Jumping = 1
                FallTillGround()
                if (Bouncieness > 10) {
                    animation.runImageAnimation(
                    Particle,
                    assets.animation`Jump Effect`,
                    30,
                    false
                    )
                    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
                    mySprite.y += -8
                    mySprite.setVelocity(0, -170)
                    pause(Bouncieness * 5)
                    music.stopAllSounds()
                    mySprite.setVelocity(0, -150)
                    pause(Bouncieness * 5)
                    mySprite.setVelocity(0, -120)
                    pause(Bouncieness * 5)
                    mySprite.setVelocity(0, -90)
                    pause(Bouncieness * 5)
                    sprites.destroy(Particle)
                }
                Jumping = 0
                info.setScore(0)
                Bouncieness = 0
            } else {
                if (BURGate > 0) {
                    Attacking = 1
                }
                Jumping = 1
                FallTillGround()
                if (BURGate > 0) {
                    Attacking = 0
                }
                music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
                Jumping = 0
                Particle = sprites.create(img`
                    . 
                    `, SpriteKind.Particle)
                tiles.placeOnTile(Particle, mySprite.tilemapLocation())
                animation.runImageAnimation(
                Particle,
                assets.animation`Jump Effect`,
                100,
                false
                )
                pause(900)
                sprites.destroy(Particle)
            }
        }
    }
}
function MenuRight () {
    if (ChooseWorld == 1) {
        World += 1
        if (World == 7) {
            World = 1
        }
    } else if (ChooseLevel == 1) {
        Level += 1
        if (Level == 7) {
            Level = 1
        }
    } else {
    	
    }
}
function SpeedAndJumpFix () {
    if (mySprite.kind() == SpriteKind.Player) {
        if (Jumping == 0) {
            if (BURGate == 1) {
                mySprite.setVelocity(0, 180)
            } else if (BURGate == 2) {
                mySprite.setVelocity(0, 250)
            } else if (BURGate == 3) {
                mySprite.setVelocity(0, 180)
            } else {
                mySprite.setVelocity(0, 150)
            }
        }
        if (Jump > 1) {
            Jump = 1
        }
        if (BonusJump > 1) {
            BonusJump = 1
        }
        if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`)) {
            Jump = 0
        }
    }
}
function Burgate3ML () {
    controller.moveSprite(mySprite, 0, 0)
    Attacking = 1
    for (let index = 0; index < 3; index++) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`EliasStROLL_L3`,
        50,
        false
        )
        for (let index = 0; index < 40; index++) {
            mySprite.x += -1
            pause(5)
            if (mySprite.isHittingTile(CollisionDirection.Left)) {
                if (mySprite.isHittingTile(CollisionDirection.Top)) {
                    mySprite.y += 0.75
                } else {
                    mySprite.y += -0.75
                }
                if (!(mySprite.isHittingTile(CollisionDirection.Left))) {
                    mySprite.x += -1
                } else {
                    mySprite.x += 1
                }
                Jumping = 1
            }
            if (World == 4) {
                if (Bossfight == 1) {
                    if (mySprite.overlapsWith(Skull)) {
                        SkullMomentum = 1
                        Skull.setVelocity(-200, -200)
                        Skull.ay = 100
                        Skull.ax = 60
                    }
                }
            }
        }
    }
    controller.moveSprite(mySprite, 70, 0)
    Jumping = 0
    Attacking = 0
    if (!(controller.right.isPressed() || controller.left.isPressed())) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`EliasPopUp_L`,
        100,
        false
        )
    }
}
function BounceOnBouncyBall () {
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    controller.moveSprite(mySprite, 0, 0)
    if (mySprite.vx < 0) {
        for (let index = 0; index < 20; index++) {
            mySprite.x += 2
            pause(10)
        }
    } else if (mySprite.vx > 0) {
        for (let index = 0; index < 20; index++) {
            mySprite.x += -2
            pause(10)
        }
    } else {
        if (MovementLeft == 1) {
            for (let index = 0; index < 20; index++) {
                mySprite.x += 2
                pause(10)
            }
        } else {
            for (let index = 0; index < 20; index++) {
                mySprite.x += -2
                pause(10)
            }
        }
    }
    controller.moveSprite(mySprite, 100, 0)
}
function TransitionOUT () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Transition)
    Transition = sprites.create(assets.image`Transition`, SpriteKind.Transition)
    Transition.x = scene.cameraProperty(CameraProperty.X)
    Transition.y = scene.cameraProperty(CameraProperty.Y)
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.InBackground)
    animation.runImageAnimation(
    Transition,
    assets.animation`TransitionAnimatedOut`,
    75,
    false
    )
    pause(1000)
    tiles.setCurrentTilemap(tilemap`nein`)
    LevelReset()
    pause(750)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.LoveLetter, function (sprite, otherSprite) {
    if (Attacking == 1) {
        sprites.destroy(otherSprite, effects.hearts, 200)
        if (Level == 5) {
            info.changeScoreBy(3)
            pause(15000)
        }
        pause(15000)
        SpawnLoveLetter()
    } else {
        otherSprite.follow(mySprite, 0)
        Love_Letter.setVelocity(0, -30)
        pause(800)
        animation.runImageAnimation(
        otherSprite,
        assets.animation`LetterBomb`,
        100,
        false
        )
        pause(300)
        Love_Letter.setVelocity(0, 0)
        otherSprite.setKind(SpriteKind.Dead)
        PipeBomb = sprites.createProjectileFromSprite(assets.image`PipeBomb`, otherSprite, 0, 100)
        PipeBomb.setKind(SpriteKind.PipeBomb)
        otherSprite.setKind(SpriteKind.LoveLetter)
        pause(500)
        animation.runImageAnimation(
        otherSprite,
        assets.animation`LoveLetterFlap`,
        100,
        true
        )
        otherSprite.follow(mySprite, 140)
    }
})
function PauseTillGround () {
    if (ChooseLevel == 1 || ChooseWorld == 1) {
        pauseUntil(() => mySprite.tileKindAt(TileDirection.Center, assets.tile`MenuFloor`))
    } else {
        if (World == 1) {
            pauseUntil(() => mySprite.tileKindAt(TileDirection.Bottom, assets.tile`MiddleFloorW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`LeftFloorW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`RightFloorW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`LeftFloatW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`MiddleFloatW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`RightFloatW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`LooseFloatW1`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`GroundHoleW1`))))))))
        } else if (World == 2) {
            pauseUntil(() => mySprite.tileKindAt(TileDirection.Bottom, assets.tile`LeftFloatW2`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`MiddleFloatW2`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`RightFloatW2`) || mySprite.tileKindAt(TileDirection.Bottom, assets.tile`LooseFloatW2`))))
        } else {
            pauseUntil(() => mySprite.tileKindAt(TileDirection.Bottom, sprites.builtin.forestTiles2) || (mySprite.tileKindAt(TileDirection.Bottom, sprites.builtin.forestTiles1) || mySprite.tileKindAt(TileDirection.Bottom, sprites.builtin.forestTiles3)))
        }
    }
}
function Course_Win () {
    if (Level == 0) {
        TransitionOUT()
        World_Select()
    } else {
        TransitionOUT()
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
        if (TypeWin == 1) {
            game.splash("TRASH COMPACTED :D")
        } else if (TypeWin == 2) {
            game.splash("Level Cleared!")
        } else {
            BURGrejected = 1
            game.splash("Rejecting BURG?!")
        }
        Action = 0
        Jumping = 0
        ChooseLevel = 1
        Level += 1
        if (Level == 7) {
            World += 1
            Level = 1
        }
        if (Level == 6) {
            Cutscene = 0
        }
        MenuConfirm()
        StartingLevel += -1
    }
}
sprites.onOverlap(SpriteKind.Doll1, SpriteKind.Explosion, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 200)
    if (Bossfight == 0) {
        Doll_1 = sprites.create(assets.image`Doll`, SpriteKind.Doll1)
        animation.runImageAnimation(
        Doll_1,
        assets.animation`DollWalk`,
        175,
        true
        )
        tiles.placeOnRandomTile(Doll_1, assets.tile`DollSpawnTile0`)
        Doll_1.follow(mySprite, 100)
    }
})
function WalkingSound_BURGate_2 () {
    if (controller.left.isPressed() || controller.right.isPressed()) {
        if (Action == 0) {
            if (FreeFall == 1) {
            	
            } else if (Jumping == 1) {
            	
            } else {
                if (BURGate == 2) {
                    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
                }
            }
        }
    }
}
function MenuDUp () {
    if (ChooseWorld == 1) {
        World += 3
        if (World > 6) {
            World += -6
        }
    } else if (ChooseLevel == 1) {
        Level += 3
        if (Level > 6) {
            Level += -6
        }
    } else {
    	
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`W2CutsceneTile`, function (sprite, location) {
    Cutscene = 1
})
function AnimateMenu () {
    if (AlternateFrame == 1) {
        if (ChooseLevel == 1 || ChooseWorld == 1) {
            if (World == 1) {
                if (ChooseWorld == 1) {
                    scene.setBackgroundImage(assets.image`WorldSelect1`)
                } else {
                    if (Level == 1) {
                        scene.setBackgroundImage(assets.image`LevelSelect1_1`)
                    } else if (Level == 2) {
                        scene.setBackgroundImage(assets.image`LevelSelect1_2`)
                    } else if (Level == 3) {
                        scene.setBackgroundImage(assets.image`LevelSelect1_3`)
                    } else if (Level == 4) {
                        scene.setBackgroundImage(assets.image`LevelSelect1_4`)
                    } else if (Level == 5) {
                        scene.setBackgroundImage(assets.image`LevelSelect1_5`)
                    } else {
                        scene.setBackgroundImage(assets.image`LevelSelect1_6`)
                    }
                }
            } else if (World == 2) {
                if (ChooseWorld == 1) {
                    scene.setBackgroundImage(assets.image`WorldSelect2`)
                } else {
                    if (Level == 1) {
                        scene.setBackgroundImage(assets.image`LevelSelect2_1`)
                    } else if (Level == 2) {
                        scene.setBackgroundImage(assets.image`LevelSelect2_2`)
                    } else if (Level == 3) {
                        scene.setBackgroundImage(assets.image`LevelSelect2_3`)
                    } else if (Level == 4) {
                        scene.setBackgroundImage(assets.image`LevelSelect2_4`)
                    } else if (Level == 5) {
                        scene.setBackgroundImage(assets.image`LevelSelect2_5`)
                    } else {
                        scene.setBackgroundImage(assets.image`LevelSelect2_6`)
                    }
                }
            } else if (World == 3) {
                if (ChooseWorld == 1) {
                    scene.setBackgroundImage(assets.image`WorldSelect3`)
                } else {
                	
                }
            } else if (World == 4) {
                if (ChooseWorld == 1) {
                    scene.setBackgroundImage(assets.image`WorldSelect4`)
                } else {
                	
                }
            } else if (World == 5) {
                if (ChooseWorld == 1) {
                    scene.setBackgroundImage(assets.image`WorldSelect5`)
                } else {
                	
                }
            } else {
                if (ChooseWorld == 1) {
                    if (W6select == 1) {
                        scene.setBackgroundImage(assets.image`WorldSelect6_2`)
                        W6select = 0
                    } else {
                        scene.setBackgroundImage(assets.image`WorldSelect6`)
                        W6select = 1
                    }
                } else {
                	
                }
            }
        }
        AlternateFrame = 0
    } else {
        if (ChooseWorld == 1) {
            scene.setBackgroundImage(assets.image`WorldSelect0`)
        } else if (ChooseLevel == 1) {
            if (World == 1) {
                scene.setBackgroundImage(assets.image`LevelSelect1_0`)
            } else if (World == 2) {
                scene.setBackgroundImage(assets.image`LevelSelect2_0`)
            } else if (World == 3) {
            	
            } else if (World == 4) {
            	
            } else if (World == 5) {
            	
            } else {
            	
            }
        } else {
        	
        }
        AlternateFrame = 1
    }
}
function on_left_button_pressed () {
    if (Code == 1) {
        CodeLeft += 1
        if (CodeLeft == 10) {
            CodeLeft = 0
        }
        if (CodeLeft == 1) {
            animation.runImageAnimation(
            CodeA,
            assets.animation`Code1`,
            1,
            true
            )
        } else if (CodeLeft == 2) {
            animation.runImageAnimation(
            CodeA,
            assets.animation`Code2`,
            1,
            true
            )
        } else if (CodeLeft == 3) {
            animation.runImageAnimation(
            CodeA,
            assets.animation`Code3`,
            1,
            true
            )
        } else if (CodeLeft == 4) {
            animation.runImageAnimation(
            CodeA,
            assets.animation`Code4`,
            1,
            true
            )
        } else if (CodeLeft == 5) {
            animation.runImageAnimation(
            CodeA,
            assets.animation`Code5`,
            1,
            true
            )
        } else if (CodeLeft == 6) {
            animation.runImageAnimation(
            CodeA,
            assets.animation`Code6`,
            1,
            true
            )
        } else if (CodeLeft == 7) {
            animation.runImageAnimation(
            CodeA,
            assets.animation`Code7`,
            1,
            true
            )
        } else if (CodeLeft == 8) {
            animation.runImageAnimation(
            CodeA,
            assets.animation`Code8`,
            1,
            true
            )
        } else if (CodeLeft == 9) {
            animation.runImageAnimation(
            CodeA,
            assets.animation`Code9`,
            1,
            true
            )
        } else {
            animation.runImageAnimation(
            CodeA,
            assets.animation`Code0`,
            1,
            true
            )
        }
    } else {
        MenuLeft()
        if (Action == 0) {
            if (FreeFall == 1) {
            	
            } else if (Jumping == 1) {
            	
            } else {
                if (BURGate == 1) {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasStroll_L1`,
                    120,
                    true
                    )
                } else if (BURGate == 2) {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasStroll_L2`,
                    120,
                    true
                    )
                } else if (BURGate == 3) {
                	
                } else {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasStroll_L0`,
                    120,
                    true
                    )
                }
            }
            if (BURGate == 3) {
                animation.runImageAnimation(
                mySprite,
                assets.animation`EliasStROLL_L3`,
                100,
                false
                )
                pause(400)
                while (controller.left.isPressed()) {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasStROLL_L3`,
                    100,
                    false
                    )
                    pause(400)
                }
                if (!(controller.right.isPressed())) {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasPopUp_L`,
                    100,
                    false
                    )
                }
            }
            MovementLeft = 1
            MovementRight = 0
        }
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (BadBomb == 1) {
        if (Math.percentChance(33)) {
            mySprite3 = sprites.create(assets.image`BombWhichMayOrMayNotWork`, SpriteKind.Dead)
            tiles.placeOnTile(mySprite3, projectile2.tilemapLocation())
            sprites.destroy(projectile2)
            animation.runImageAnimation(
            mySprite3,
            assets.animation`Kaboom`,
            100,
            false
            )
            music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
            mySprite3.setScale(2, ScaleAnchor.Middle)
            mySprite3.y += -16
            sprites.destroy(otherSprite)
            BerrySpawn()
            pause(800)
            sprites.destroy(mySprite3)
            BadBomb = 0
        } else {
            mySprite4 = sprites.create(assets.image`BombWhichMayOrMayNotWork`, SpriteKind.Dead)
            tiles.placeOnTile(mySprite4, projectile2.tilemapLocation())
            sprites.destroy(projectile2)
            mySprite4.setVelocity(0, -50)
            mySprite4.setFlag(SpriteFlag.GhostThroughWalls, true)
            music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
            for (let index = 0; index < 10; index++) {
                pause(50)
                mySprite4.vy += 10
            }
            BadBomb = 0
            for (let index = 0; index < 50; index++) {
            	
            }
            mySprite4.setVelocity(0, 0)
            sprites.destroy(mySprite4)
        }
    } else {
        sprites.destroy(projectile)
        sprites.destroy(otherSprite, effects.disintegrate, 500)
        BerrySpawn()
        if (Level == 5) {
            info.changeScoreBy(1)
        }
    }
})
function JumpingActive () {
    Particle = sprites.create(img`
        . 
        `, SpriteKind.Particle)
    tiles.placeOnTile(Particle, mySprite.tilemapLocation())
    if (BURGate == 1) {
        if (Action == 0) {
            if (Jump == 0) {
                animation.stopAnimation(animation.AnimationTypes.All, mySprite)
            }
            Jumping = 1
            if (JumpHeight != -1) {
                controller.moveSprite(mySprite, 0, 0)
            }
            if (MovementLeft == 1) {
                animation.runImageAnimation(
                mySprite,
                assets.animation`EliasJump_L1`,
                120,
                false
                )
            } else {
                animation.runImageAnimation(
                mySprite,
                assets.animation`EliasJump_R1`,
                120,
                false
                )
            }
            if (JumpHeight != -1) {
                pause(480)
            }
            controller.moveSprite(mySprite, 80, 0)
            animation.runImageAnimation(
            Particle,
            assets.animation`Jump Effect`,
            30,
            false
            )
            music.play(music.createSoundEffect(WaveShape.Noise, 615, 1971, 255, 0, 120, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        }
        mySprite.setVelocity(0, -120)
        pause(100)
        if (JumpHeight == 0) {
            pause(50)
            AnimateOn += 1
        } else if (JumpHeight == 1) {
            pause(300)
        } else if (JumpHeight == -1) {
            pause(50)
        }
        Jumping += -1
        FreeFall = 1
    } else if (BURGate == 2) {
        if (JumpHeight >= 0) {
            if (Action == 0) {
                if (Jump == 0) {
                    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
                }
                Jumping = 1
                controller.moveSprite(mySprite, 0, 0)
                if (MovementLeft == 1) {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasJump_L2`,
                    120,
                    false
                    )
                } else {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasJump_R2`,
                    120,
                    false
                    )
                }
                if (JumpHeight != -1) {
                    pause(1560)
                }
                animation.runImageAnimation(
                Particle,
                assets.animation`Jump Effect`,
                30,
                false
                )
                music.play(music.createSoundEffect(WaveShape.Noise, 615, 1971, 255, 0, 120, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                pause(100)
                pause(380)
                controller.moveSprite(mySprite, 50, 0)
                Jumping = 0
            }
        }
    } else if (BURGate == 3) {
    	
    } else {
        if (Action == 0) {
            if (Jump == 0) {
                animation.stopAnimation(animation.AnimationTypes.All, mySprite)
            }
            if (MovementLeft == 1) {
                animation.runImageAnimation(
                mySprite,
                assets.animation`EliasJump_L0`,
                120,
                false
                )
            } else {
                animation.runImageAnimation(
                mySprite,
                assets.animation`EliasJump_R0`,
                120,
                false
                )
            }
            animation.runImageAnimation(
            Particle,
            assets.animation`Jump Effect`,
            30,
            false
            )
            music.play(music.createSoundEffect(WaveShape.Noise, 615, 1971, 255, 0, 120, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        }
        Jumping = 1
        mySprite.setVelocity(0, -150)
        pause(100)
        if (JumpHeight == 0) {
            pause(50)
        } else if (JumpHeight == 1) {
            pause(300)
        } else if (JumpHeight == -1) {
            pause(100)
        }
        Jumping += -1
        FreeFall = 1
    }
    sprites.destroy(Particle)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Attacking == 1) {
        sprites.destroy(otherSprite, effects.disintegrate, 500)
        BerrySpawn()
        if (World == 1) {
            Berry2 = sprites.create(assets.image`Helthy`, SpriteKind.Enemy)
            tiles.placeOnRandomTile(Berry2, assets.tile`GymBerryTile2`)
        } else {
            Berry2 = sprites.create(assets.image`Helthy`, SpriteKind.Enemy)
            tiles.placeOnRandomTile(Berry2, assets.tile`BerryTile2`)
        }
        if (Level == 5) {
            info.changeScoreBy(1)
        }
    } else {
        info.stopCountdown()
        Action = -1
        sprites.destroy(mySprite)
        LevelReset()
        tiles.setCurrentTilemap(tilemap`uLOSE`)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        if (World == 1) {
            scene.setBackgroundImage(assets.image`UhOh1Gym`)
            pause(100)
            scene.setBackgroundImage(assets.image`UhOh2Gym`)
        } else {
            scene.setBackgroundImage(assets.image`UhOh1`)
            pause(100)
            scene.setBackgroundImage(assets.image`UhOh2`)
        }
        pause(100)
        scene.setBackgroundImage(assets.image`UhOh3`)
        pause(100)
        scene.setBackgroundImage(assets.image`UhOh4`)
        pause(100)
        scene.setBackgroundImage(assets.image`UhOh5`)
        pause(3000)
        game.setGameOverMessage(false, "Eat ur greens >:D")
        Course_Fail()
    }
})
function HittingGround_Bounce () {
    if (FreeFall == 1) {
        if (Action == 0) {
            if (BURGate != 3) {
                animation.stopAnimation(animation.AnimationTypes.All, mySprite)
            }
            if (BURGate == 1) {
                if (MovementRight == 1) {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasLanding_R1`,
                    120,
                    false
                    )
                } else {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasLanding_L1`,
                    120,
                    false
                    )
                }
            } else if (BURGate == 2) {
                if (MovementRight == 1) {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasLanding_R2`,
                    120,
                    false
                    )
                } else {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasLanding_L2`,
                    120,
                    false
                    )
                }
                music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
            } else if (BURGate == 3) {
                music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
            } else {
                music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
                if (MovementRight == 1) {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasLanding_R0`,
                    120,
                    false
                    )
                } else {
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasLanding_L0`,
                    120,
                    false
                    )
                }
            }
        }
        FreeFall = 0
        Jumping = 0
        pause(10)
        mySprite.setVelocity(0, 500)
    }
    if (BURGate == 3) {
        if (Jumping == 0) {
            FreeFall = 0
            Bouncieness = 0
        } else {
        	
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    InteractionBoss()
})
let Berry2: Sprite = null
let AnimateOn = 0
let mySprite4: Sprite = null
let AlternateFrame = 0
let Bouncieness = 0
let PrimedPipeBomb: Sprite = null
let Particle: Sprite = null
let BadBomb = 0
let Transition: Sprite = null
let Ball3: Sprite = null
let Ball2: Sprite = null
let Ball1: Sprite = null
let Pipebomb2: Sprite = null
let PipeBomb: Sprite = null
let BossAttack2 = 0
let TypeWin = 0
let BossReset = 0
let AnimationCam: Sprite = null
let CurrentY = 0
let CurrentX = 0
let mySprite3: Sprite = null
let WeakPoint: Sprite = null
let BigYEET = 0
let WeightLower2: Sprite = null
let WeightUpper2: Sprite = null
let Weight2: Sprite = null
let BigOlFoot: Sprite = null
let Particle2: Sprite = null
let projectile: Sprite = null
let BossAttack3 = 0
let SwitchA = 0
let WeightUpper1: Sprite = null
let Weight1: Sprite = null
let WeigthLower1: Sprite = null
let Music = 0
let CodeC: Sprite = null
let CodeA: Sprite = null
let projectile2: Sprite = null
let Love_Letter: Sprite = null
let Oliven: Sprite = null
let Cutscene = 0
let NOPE = 0
let JumpHeight = 0
let BonusJump = 0
let Jump = 0
let Pytrack: Sprite = null
let W6select = 0
let BossXtra2: Sprite = null
let StartingLevel = 0
let listNumber = 0
let CodeLeft = 0
let CodeDown = 0
let CodeD: Sprite = null
let CodeRight = 0
let BossXtra: Sprite = null
let TreadmillSpeed = 0
let BossCooldown = 0
let mySprite2: Sprite = null
let SkullMomentum = 0
let Skull: Sprite = null
let Attacking = 0
let CodeB: Sprite = null
let CodeUp = 0
let Code = 0
let Doll_2: Sprite = null
let Doll_1: Sprite = null
let Jumping = 0
let FreeFall = 0
let Action = 0
let ChooseWorld = 0
let ChooseLevel = 0
let Boss: Sprite = null
let Vulnerable = 0
let BossAttack = 0
let Boss21ShortHop = 0
let BossHealth = 0
let Bossfight = 0
let Wait = 0
let TrueEnd: Sprite = null
let trashcompactor: Sprite = null
let Berry1: Sprite = null
let BURGate = 0
let mySprite: Sprite = null
let myBURG: Sprite = null
let Retry = 0
let BURGrejected = 0
let MovementRight = 0
let MovementLeft = 0
let AttackReady = 0
let World = 0
let Level = 0
let Game = 0
Game = 1
Level = 0
World = 0
AttackReady = 1
MovementLeft = 0
MovementRight = 1
BURGrejected = 0
Retry = 1
scene.setBackgroundColor(9)
if (game.ask("A - World Select", "B - Intro Stage")) {
    World_Select()
} else {
    tiles.setCurrentTilemap(tilemap`level0`)
    myBURG = sprites.create(assets.image`BURG`, SpriteKind.Food)
    tiles.placeOnRandomTile(myBURG, assets.tile`BURGtile1`)
    LevelStart()
}
game.onUpdate(function () {
    if (BigYEET == 1) {
        mySprite.setVelocity(150, -50)
    }
})
game.onUpdate(function () {
    if (NOPE == 1) {
        Action = -1
    }
})
game.onUpdate(function () {
    MovementEnemies()
})
game.onUpdate(function () {
    SpeedAndJumpFix()
})
game.onUpdateInterval(TreadmillSpeed * 10, function () {
    SpeedOfTreadmill()
})
game.onUpdateInterval(1000, function () {
    W2Boss1Action2()
})
game.onUpdateInterval(10, function () {
    if (World == 1) {
        Boss1()
    } else if (World == 2) {
        Boss2()
    }
})
game.onUpdateInterval(1, function () {
    WeightsDoTurn()
})
game.onUpdateInterval(1, function () {
    WeightsDoTurn2()
})
game.onUpdateInterval(2, function () {
    W2Boss1Action()
})
game.onUpdateInterval(400, function () {
    WalkingSound_BURGate_1()
})
forever(function () {
    FreeeFallin()
})
forever(function () {
    PlayMusic()
})
forever(function () {
    CheckForCutscene()
})
game.onUpdateInterval(500, function () {
    if (World == 6) {
        AnimateMenu()
    }
})
game.onUpdateInterval(500, function () {
    WalkingSound_BURGate_2()
})
game.onUpdateInterval(100, function () {
    WalkingSound_BURGate_3()
})
game.onUpdateInterval(200, function () {
    if (World != 6) {
        AnimateMenu()
    }
})
game.onUpdateInterval(200, function () {
    WalkingSound_BURGate_0()
})
