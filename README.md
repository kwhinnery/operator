# Operator

`Operator` is a Twilio-powered desktop soft phone and communications app for developers. It is an Electron desktop app targeting Mac, Windows, and Linux computers. Goal is to deliver all features without requiring a developer-managed server-side component (there may be some Twilio Functions or related services involved). The desired UX is for a developer to enter their account SID and auth token into the UI, and the app will handle everything for them from that point on.

## Run in development mode

Clone the repository and install dependencies:

```
npm install
```

In one terminal window/tab, start the [create-react-app](https://github.com/facebook/create-react-app) dev server:

```
npm run dev
```

Then, in another terminal tab/window, start the [Electron](https://electronjs.org/) app:

```
npm start
```

## Testing a production build

In production, the application will load pre-built JavaScript created by our build scripts. To test this behavior, you can do:

```
export ELECTRON_IS_DEV=0
npm run build
npm start
```

## License

MIT

## Tracking

Kevin's `#100DaysOfCode` Challenge:

__1 / 100__

Features:

- [ ] Manage Twilio account configuration
- [ ] Purchase and manage phone numbers
- [ ] Send / receive SMS messages per number
- [ ] Make / receive phone calls per number
- [ ] Package and distribute for major desktop app stores
- [ ] VoIP call other Operators (no PSTN)
- [ ] Chat with other Operators
- [ ] Video call other Operators
