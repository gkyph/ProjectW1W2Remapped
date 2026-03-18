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
}
function LevelStart () {
    sprites.destroy(mySprite)
    scene.setBackgroundImage(assets.image`Nothing`)
    scene.setBackgroundColor(9)
    mySprite = sprites.create(assets.image`EliasIdle_0`, SpriteKind.Player)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnRandomTile(mySprite, assets.tile`Start`)
    BURGate = 0
    controller.moveSprite(mySprite, 100, 0)
    Berry1 = sprites.create(assets.image`Helthy`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(Berry1, assets.tile`BerryTile1`)
    trashcompactor = sprites.create(assets.image`trashsquish`, SpriteKind.trashcompact)
    tiles.placeOnRandomTile(trashcompactor, assets.tile`end`)
    TrueEnd = sprites.create(assets.image`TeleportThingy`, SpriteKind.TrueEnd)
    tiles.placeOnRandomTile(TrueEnd, assets.tile`Specialend`)
    TransitionIN()
    info.startCountdown(500)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.TrueEnd, function (sprite, otherSprite) {
    Action = -1
    Jumping = 1
    mySprite.setVelocity(0, 0)
    tiles.placeOnRandomTile(mySprite, assets.tile`Specialend`)
    controller.moveSprite(mySprite, 0, 0)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Dead)
    tiles.placeOnTile(mySprite2, mySprite.tilemapLocation())
    scene.cameraFollowSprite(mySprite2)
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
    Course_Win()
})
function FallTillGround () {
    if (ChooseLevel == 1 || ChooseWorld == 1) {
        while (!(mySprite.tileKindAt(TileDirection.Center, assets.tile`MenuFloor`))) {
            mySprite.setVelocity(0, 500)
            pause(10)
        }
    } else {
        if (World == 1) {
            while (!(mySprite.tileKindAt(TileDirection.Bottom, assets.tile`LeftFloorW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`MiddleFloorW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`RightFloorW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`LeftFloatW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`MiddleFloatW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`RightFloatW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`LooseFloatW1`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`GroundHoleW1`))))))))) {
                mySprite.setVelocity(0, 500)
                pause(10)
            }
        } else if (World == 2) {
        	
        } else if (World == 3) {
        	
        } else if (World == 4) {
        	
        } else if (World == 5) {
        	
        } else if (World == 6) {
        	
        } else {
            while (!(mySprite.tileKindAt(TileDirection.Bottom, sprites.builtin.forestTiles2) || (mySprite.tileKindAt(TileDirection.Bottom, sprites.builtin.forestTiles1) || (mySprite.tileKindAt(TileDirection.Bottom, sprites.builtin.forestTiles3) || mySprite.tileKindAt(TileDirection.Center, assets.tile`MenuFloor`))))) {
                mySprite.setVelocity(0, 500)
                pause(10)
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.SolidTop, function (sprite, otherSprite) {
    if (mySprite.y <= otherSprite.y) {
        mySprite.vy = 0
        Give_jump()
        mySprite.vy = 0
        HittingGround()
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
    MenuDUp()
    if (Action == 0 || Action == 1) {
        if (Jump > 0) {
            JumpHeight = 0
            pause(120)
            if (controller.up.isPressed()) {
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
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    JumpOnGround()
    HittingGround()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`MenuFloor`, function (sprite, location) {
    Give_jump()
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
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    MenuBack()
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
                    AttackReady = 0
                    Action = 2
                    Jumping += 1
                    mySprite.setVelocity(0, -140)
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
                    projectile = sprites.createProjectileFromSprite(assets.image`Knife`, mySprite, 0, 100)
                    animation.runImageAnimation(
                    projectile,
                    assets.animation`KnifeThrown`,
                    50,
                    true
                    )
                    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
                    mySprite.setVelocity(0, -150)
                    Particle = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
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
                    pause(625)
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
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`SpikeFloor`, function (sprite, location) {
    info.stopCountdown()
    Action = -1
    game.setGameOverMessage(false, "Baloon goes pop ):")
    Course_Fail()
})
sprites.onOverlap(SpriteKind.ProjectileKeep, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    Berry1 = sprites.create(assets.image`Helthy`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(Berry1, assets.tile`BerryTile2`)
    if (Level == 5) {
        info.changeScoreBy(1)
    }
})
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
}
function MenuConfirm () {
    if (ChooseWorld == 1) {
        ChooseWorld = 0
        ChooseLevel = 1
        Level = 1
    } else if (ChooseLevel == 1) {
        ChooseLevel = 0
        StartingLevel = 2
        if (World == 1) {
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
            	
            }
            SpawnBasketball13()
        } else if (World == 2) {
        	
        } else if (World == 3) {
        	
        } else if (World == 4) {
        	
        } else if (World == 5) {
        	
        } else {
        	
        }
    } else {
    	
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    MenuConfirm()
    A_button()
})
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
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`LeftFloorW1`)) {
        Give_jump()
    } else if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`MiddleFloorW1`)) {
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
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
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
        game.reset()
    } else if (ChooseLevel == 1) {
        ChooseLevel = 0
        ChooseWorld = 1
        Level = 1
    } else {
    	
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.trashcompact, function (sprite, otherSprite) {
    Action = -1
    Jumping = 1
    mySprite.setVelocity(0, 0)
    tiles.placeOnRandomTile(mySprite, assets.tile`end`)
    controller.moveSprite(mySprite, 0, 0)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
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
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
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
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
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
})
function HittingGround () {
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
function Give_jump () {
    Jump = 1
    BonusJump = 1
}
function A_button () {
    if (StartingLevel > 0) {
        pause(750)
        StartingLevel += -1
    }
    if (StartingLevel == 1) {
        StartingLevel = 0
    } else {
        if (AttackReady == 1) {
            if (Action == 0) {
                AttackReady = 0
                Action = 1
                if (BURGate == 1) {
                    music.play(music.createSoundEffect(WaveShape.Noise, 3300, 1400, 255, 0, 800, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
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
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.ProjectileKeep)
                    Particle2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
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
                    if (MovementLeft == 1) {
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
                                    mySprite.x += 1
                                    mySprite.y += -0.75
                                    Jumping = 1
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
                    } else {
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
                                    mySprite.x += -1
                                    mySprite.y += -0.75
                                    Jumping = 1
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
                } else {
                    music.play(music.createSoundEffect(WaveShape.Noise, 3300, 1400, 255, 0, 800, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                    animation.runImageAnimation(
                    mySprite,
                    assets.animation`EliasATK_R0`,
                    100,
                    false
                    )
                    mySprite.startEffect(effects.spray, 800)
                    for (let index = 0; index < 16; index++) {
                        mySprite.x += 3
                        pause(25)
                    }
                    Attacking = 1
                    for (let index = 0; index < 16; index++) {
                        mySprite.x += 3
                        pause(25)
                    }
                    Attacking = 0
                }
                Action = 0
                pause(1500)
                AttackReady = 1
            }
        }
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
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
})
function OLIVEEEEEEER () {
    Oliven = sprites.create(assets.image`DEN karen`, SpriteKind.Twist)
    animation.runImageAnimation(
    Oliven,
    assets.animation`Rizzler kanskje`,
    100,
    true
    )
    tiles.placeOnRandomTile(Oliven, assets.tile`OliverTile`)
    info.setScore(0)
}
function Course_Fail () {
    if (Level == 0) {
        TransitionOUT()
        World_Select()
    } else {
        game.gameOver(false)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Twist, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(mySprite, assets.tile`Start`)
    pause(400)
    game.showLongText("Oliver: Yoooooooo", DialogLayout.Bottom)
    pause(400)
    game.showLongText("Oliver: Nutunamala", DialogLayout.Bottom)
})
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
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    sprites.destroy(myBURG, effects.disintegrate, 200)
    myBURG = sprites.create(assets.image`BURG`, SpriteKind.Food)
    Action = -1
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
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
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
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
        scene.cameraFollowSprite(mySprite)
        pause(3000)
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
        mySprite.setImage(assets.image`EliasIdle_3`)
        mySprite.startEffect(effects.starField, 3000)
        scene.setBackgroundImage(assets.image`Spotlight`)
        sprites.destroy(AnimationCam)
        pause(3000)
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.BouncyBall, function (sprite, otherSprite) {
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
})
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
function PauseTillGround () {
    if (ChooseLevel == 1 || ChooseWorld == 1) {
        pauseUntil(() => mySprite.tileKindAt(TileDirection.Center, assets.tile`MenuFloor`))
    } else {
        if (World == 1) {
            pauseUntil(() => mySprite.tileKindAt(TileDirection.Bottom, assets.tile`LeftFloorW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`MiddleFloorW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`RightFloorW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`LeftFloatW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`MiddleFloatW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`RightFloatW1`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`LooseFloatW1`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`GroundHoleW1`))))))))
        } else if (World == 2) {
        	
        } else if (World == 3) {
        	
        } else if (World == 4) {
        	
        } else if (World == 5) {
        	
        } else if (World == 6) {
        	
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
        } else {
            game.splash("Level Cleared!")
        }
        Action = 0
        Jumping = 0
        ChooseLevel = 1
        Level += 1
        MenuConfirm()
        StartingLevel += -1
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
            Berry1 = sprites.create(assets.image`Helthy`, SpriteKind.Enemy)
            tiles.placeOnRandomTile(Berry1, assets.tile`BerryTile2`)
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
                pause(20)
                mySprite4.vy += 10
            }
            mySprite4.setVelocity(0, 0)
            sprites.destroy(mySprite4)
        }
    } else {
        sprites.destroy(projectile)
        sprites.destroy(otherSprite, effects.disintegrate, 500)
        Berry1 = sprites.create(assets.image`Helthy`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(Berry1, assets.tile`BerryTile2`)
        if (Level == 5) {
            info.changeScoreBy(1)
        }
    }
})
function JumpingActive () {
    Particle = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
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
            music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        }
        mySprite.setVelocity(0, -120)
        pause(100)
        if (Action == 0) {
            music.stopAllSounds()
        }
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
                music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
                pause(100)
                music.stopAllSounds()
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
            music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        }
        Jumping = 1
        mySprite.setVelocity(0, -150)
        pause(100)
        if (Action == 0) {
            music.stopAllSounds()
        }
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
        Berry1 = sprites.create(assets.image`Helthy`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(Berry1, assets.tile`BerryTile2`)
        Berry2 = sprites.create(assets.image`Helthy`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(Berry2, assets.tile`BerryTile2`)
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
        game.setGameOverMessage(false, "Eat ur greens >:D")
        Course_Fail()
    }
})
let AlternateFrame = 0
let Berry2: Sprite = null
let AnimateOn = 0
let mySprite4: Sprite = null
let Transition: Sprite = null
let AnimationCam: Sprite = null
let CurrentY = 0
let CurrentX = 0
let mySprite3: Sprite = null
let Weight2: Sprite = null
let WeightLower2: Sprite = null
let WeightUpper2: Sprite = null
let Weight1: Sprite = null
let WeigthLower1: Sprite = null
let WeightUpper1: Sprite = null
let Ball3: Sprite = null
let Ball2: Sprite = null
let Ball1: Sprite = null
let Oliven: Sprite = null
let Particle2: Sprite = null
let Attacking = 0
let Bouncieness = 0
let StartingLevel = 0
let Particle: Sprite = null
let projectile2: Sprite = null
let BadBomb = 0
let projectile: Sprite = null
let FreeFall = 0
let JumpHeight = 0
let BonusJump = 0
let Jump = 0
let ChooseWorld = 0
let ChooseLevel = 0
let TypeWin = 0
let mySprite2: Sprite = null
let Jumping = 0
let Action = 0
let TrueEnd: Sprite = null
let trashcompactor: Sprite = null
let Berry1: Sprite = null
let BURGate = 0
let mySprite: Sprite = null
let myBURG: Sprite = null
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
})
game.onUpdateInterval(1, function () {
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
})
game.onUpdateInterval(1, function () {
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
})
game.onUpdateInterval(400, function () {
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
})
forever(function () {
    if (Game == 0) {
        info.stopCountdown()
        mySprite.setVelocity(0, 150)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
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
})
game.onUpdateInterval(500, function () {
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
})
game.onUpdateInterval(100, function () {
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
})
game.onUpdateInterval(100, function () {
    if (BURGate == 3) {
        if (mySprite.vy > 0) {
            Bouncieness += 10
        }
    }
})
game.onUpdateInterval(200, function () {
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
})
game.onUpdateInterval(200, function () {
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
            	
            } else if (World == 3) {
            	
            } else if (World == 4) {
            	
            } else if (World == 5) {
            	
            } else {
            	
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
            	
            } else if (World == 3) {
            	
            } else if (World == 4) {
            	
            } else if (World == 5) {
            	
            } else {
            	
            }
        } else {
        	
        }
        AlternateFrame = 1
    }
})
