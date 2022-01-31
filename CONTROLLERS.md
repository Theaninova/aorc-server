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

### `timerUpdate`

Emitted when the in-game timer changes

**data**: `timeMs: number`
