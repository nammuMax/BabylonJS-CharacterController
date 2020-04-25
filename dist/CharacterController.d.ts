import { Skeleton, ArcRotateCamera, Vector3, Mesh, Scene, AnimationGroup } from "babylonjs";
export declare class CharacterController {
    private _avatar;
    private _skeleton;
    private _camera;
    private _scene;
    private _walkSpeed;
    private _runSpeed;
    private _backSpeed;
    private _jumpSpeed;
    private _leftSpeed;
    private _rightSpeed;
    private _turnSpeed;
    private _gravity;
    private _minSlopeLimit;
    private _maxSlopeLimit;
    private _sl;
    private _sl2;
    private _stepOffset;
    private _vMoveTot;
    private _vMovStartPos;
    private _walk;
    private _walkBack;
    private _idle;
    private _idleJump;
    private _run;
    private _runJump;
    private _fall;
    private _turnLeft;
    private _turnRight;
    private _strafeLeft;
    private _strafeRight;
    private _slideBack;
    private _anims;
    private _walkKey;
    private _walkBackKey;
    private _turnLeftKey;
    private _turnRightKey;
    private _strafeLeftKey;
    private _strafeRightKey;
    private _jumpKey;
    private _elasticCamera;
    private _cameraTarget;
    private _noFirstPerson;
    setAvatar(avatar: Mesh): void;
    setAvatarSkeleton(skeleton: Skeleton): void;
    setSlopeLimit(minSlopeLimit: number, maxSlopeLimit: number): void;
    setStepOffset(stepOffset: number): void;
    setWalkSpeed(n: number): void;
    setRunSpeed(n: number): void;
    setBackSpeed(n: number): void;
    setJumpSpeed(n: number): void;
    setLeftSpeed(n: number): void;
    setRightSpeed(n: number): void;
    setTurnSpeed(n: number): void;
    setGravity(n: number): void;
    setAnimationGroups(agMap: {}): void;
    setAnimationRanges(arMap: {}): void;
    private setAnim;
    enableBlending(n: number): void;
    disableBlending(): void;
    setWalkAnim(rangeName: string | AnimationGroup, rate: number, loop: boolean): void;
    setRunAnim(rangeName: string | AnimationGroup, rate: number, loop: boolean): void;
    setWalkBackAnim(rangeName: string | AnimationGroup, rate: number, loop: boolean): void;
    setSlideBackAnim(rangeName: string | AnimationGroup, rate: number, loop: boolean): void;
    setIdleAnim(rangeName: string | AnimationGroup, rate: number, loop: boolean): void;
    setTurnRightAnim(rangeName: string | AnimationGroup, rate: number, loop: boolean): void;
    setTurnLeftAnim(rangeName: string | AnimationGroup, rate: number, loop: boolean): void;
    setStrafeRightAnim(rangeName: string | AnimationGroup, rate: number, loop: boolean): void;
    setStrafeLeftAnim(rangeName: string | AnimationGroup, rate: number, loop: boolean): void;
    setIdleJumpAnim(rangeName: string | AnimationGroup, rate: number, loop: boolean): void;
    setRunJumpAnim(rangeName: string | AnimationGroup, rate: number, loop: boolean): void;
    setFallAnim(rangeName: string | AnimationGroup, rate: number, loop: boolean): void;
    setWalkKey(key: string): void;
    setWalkBackKey(key: string): void;
    setTurnLeftKey(key: string): void;
    setTurnRightKey(key: string): void;
    setStrafeLeftKey(key: string): void;
    setStrafeRightKey(key: string): void;
    setJumpKey(key: string): void;
    setCameraElasticity(b: boolean): void;
    setCameraTarget(v: Vector3): void;
    cameraCollisionChanged(): void;
    setNoFirstPerson(b: boolean): void;
    private checkAnims;
    private mode;
    private _saveMode;
    setMode(n: number): void;
    private _isRHS;
    private _signRHS;
    private _setRHS;
    private _ffSign;
    private _av2cam;
    setFaceForward(b: boolean): void;
    private checkAGs;
    private _started;
    start(): void;
    stop(): void;
    private _stopAnim;
    pauseAnim(): void;
    resumeAnim(): void;
    private _prevAnim;
    private _avStartPos;
    private _grounded;
    private _freeFallDist;
    private _fallFrameCountMin;
    private _fallFrameCount;
    private _inFreeFall;
    private _wasWalking;
    private _wasRunning;
    private _moveVector;
    private _isAvFacingCamera;
    private _moveAVandCamera;
    private _jumpStartPosY;
    private _jumpTime;
    private _doJump;
    private _endJump;
    private _areVectorsEqual;
    private _verticalSlope;
    private _movFallTime;
    private _sign;
    private _doMove;
    private _endFreeFall;
    private _idleFallTime;
    private _doIdle;
    private _groundFrameCount;
    private _groundFrameMax;
    private _groundIt;
    private _unGroundIt;
    private _savedCameraCollision;
    private _inFP;
    private _updateTargetValue;
    private _ray;
    private _rayDir;
    private _cameraSkin;
    private _skip;
    private _snapCamera;
    private _move;
    anyMovement(): boolean;
    private _onKeyDown;
    private _onKeyUp;
    disableKeyBoard(): void;
    enableKeyBoard(): void;
    walk(b: boolean): void;
    walkBack(b: boolean): void;
    run(b: boolean): void;
    turnLeft(b: boolean): void;
    turnRight(b: boolean): void;
    strafeLeft(b: boolean): void;
    strafeRight(b: boolean): void;
    jump(): void;
    idle(): void;
    private _act;
    private _renderer;
    private _handleKeyUp;
    private _handleKeyDown;
    private _isAG;
    private _hasAnims;
    constructor(avatar: Mesh, camera: ArcRotateCamera, scene: Scene, agMap?: {}, faceForward?: boolean);
}
export declare class AnimData {
    name: string;
    loop: boolean;
    rate: number;
    ag: AnimationGroup;
    exist: boolean;
    constructor(name: string);
}
export declare class Action {
    forward: boolean;
    backward: boolean;
    turnRight: boolean;
    turnLeft: boolean;
    stepRight: boolean;
    stepLeft: boolean;
    jump: boolean;
    shift: boolean;
    name: string;
    prevName: string;
    constructor();
    reset(): void;
}
