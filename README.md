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

interface StageUpdateData {
  time: number; // seconds fraction
  carData?: {
    position: Vector3;
    rotation: Vector3;
    velocity: Vector3;
    throttleInput: number; // float
    steeringInput: number; // float
    brakeInput: number; // float
    handbrakeInput: number; // float
    clutchInput: number; // float
    absTriggered: boolean;
    tcsTriggered: boolean;
    espTriggered: boolean;
    drivetrain: {
      clutch: number; // float
      rpm: number; // float
      torque: number; // float
      gear: number; // int
      wheelTireVelocity: number; // float
      canStall: boolean;
      throttle: number; // float
      shiftTriggered: boolean;
      canShiftAgain: boolean;
      currentPower: number; // float
      currentGearRatio: number; // float
      isChangingGear: boolean;
      velocity: number; // float
      isStalling: boolean;
    }
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
