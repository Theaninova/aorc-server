# Controllers

Route fragment: `/controllers`

## Events

All events have the following format:
```ts
interface ClientData<T> {
  user: string;
  data: T;
}
```

### `/controllers/userJoined`
Emitted when a user joined

**data**: `undefined`

### `/controllers/userLeft`

Emitted when a user left

**data**: `undefined`

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

### `eventStart`

### `eventOver`

```ts
interface EventOverData {
  terminalDamage: boolean;
  finalTime: number; // seconds fraction
  penalties: number; // int
}
```
