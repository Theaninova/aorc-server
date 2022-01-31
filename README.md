# AORC Server

[![](https://img.shields.io/github/v/release/Theaninova/aorc-server?label=Download)](https://github.com/Theaninova/aorc-server/releases/latest)
![](https://img.shields.io/badge/Game%20Version-v1.3.3a-blue)
[![Art Or Rally Discord](https://badgen.net/discord/members/Sx3e7qGTh9)](https://discord.gg/Sx3e7qGTh9)

[![](https://img.shields.io/badge/Controller%20Reference%20Implementation-GitHub-23292F)](https://github.com/Theaninova/aorc-reference-observer)
[![](https://img.shields.io/badge/AOR%20Client%20Mod-GitHub-23292F)](https://github.com/Theaninova/aorc-client)

*This gives you an overview of the protocol you can use from a controller*

Route fragment: `/controllers`

***All events have the following format:***
```ts
interface ClientData<T> {
  user: string;
  data: T;
}
```

## Events

### `userJoined`
Emitted when a user joined

**data**: `undefined`

### `userLeft`

Emitted when a user left

**data**: `undefined`

### `loadLevel`

Emitted when a level is loaded

**data**: `number` (level ID)

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

## Actions
