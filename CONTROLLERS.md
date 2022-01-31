# Controllers

Route fragment: `/controllers`

## Events

### `/controllers/userJoined`
### `/controllers/userLeft`

## Forwarded Events

All forwarded events have the following format:
```ts
{
  user: string;
  data: any;
}
```

### `loadLevel`

Emitted when a level is loaded

**data**: `levelId: number`

### `stageUpdate`

Emitted when the in-game timer changes

**data**:
```ts
interface StageUpdateData {
  time: number; // seconds fraction
  carData: {
    frame: number; // int
    position: Vector3; // Vector3 is serialized as {x, y, z} (float)
    rotation: RotationApproximate; // RotationApproximate are euler angles serialized as {x, y, z} (byte)
    velocity: Vector3;
    throttleInput: number; // sbyte
    steeringInput: number; // sbyte
    brakeInput: number; // sbyte
    handbrakeInput: boolean;
    gear: number; // byte
    resetCarThisFrame: boolean;
    engineCondition; // sbyte
    dirtyness; // sbyte
  }
}
```
