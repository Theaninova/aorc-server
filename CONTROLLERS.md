# Controllers

Route fragment: `/controllers`

## Events

### `/controllers/userJoined`
### `/controllers/userLeft`

## Forwarded Events

All forwarded events have the following format:
```ts
interface ClientData<T> {
  user: string;
  data: T;
}
```

### `loadLevel`

Emitted when a level is loaded

**data**: `levelId: number`

### `stageUpdate`

Emitted when the in-game timer changes

**data**:
```ts
type Vector3 = [number, number, number]; // float
type RotationApproximate = [number, number, number]; // byte

interface StageUpdateData {
  time: number; // seconds fraction
  carData?: {
    frame: number; // int
    position: Vector3;
    rotation: RotationApproximate;
    velocity: Vector3;
    throttleInput: number; // sbyte
    steeringInput: number; // sbyte
    brakeInput: number; // sbyte
    handbrakeInput: boolean;
    gear: number; // byte
    resetCarThisFrame: boolean;
    engineCondition: number; // sbyte
    dirtiness: number; // sbyte
  }
}
```
