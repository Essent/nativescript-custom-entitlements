# Nativescript Xcode 8 custom entitlements
Nativescript hook for supporting custom xcode 8 entitlements, see https://github.com/NativeScript/nativescript-cli/issues/2075

[![npm version](https://badge.fury.io/js/nativescript-custom-entitlements.svg)](https://badge.fury.io/js/nativescript-custom-entitlements)

## Installation

### Npm

```bash
npm install nativescript-custom-entitlements --save-dev
```

## Configuration

You'll need to have a entitlements file `app.entitlements` in the `app/App_Resources/iOS` folder.

**TIP** You can open the project in xcode 8 and activate the entitlements you need. xcode will generate an entitlements file which you can copy to your nativescript project

### Example entitlements file

`app/App_Resources/iOS/app.entitlements`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>aps-environment</key>
	<string>development</string>
</dict>
</plist>
```

## Run Demo

```bash
npm run setup
npm run demo.ios
```

## Check entitlements

```bash
npm run setup
npm run resetdemo
cd demo
tns build ios --for-device
cp demo/platforms/ios/build/device/demo.ipa build/demo/platforms/ios/build/device/demo.zip
unzip demo/platforms/ios/build/device/demo.zip -d demo/platforms/ios/build/device/
codesign -d --entitlements :- "demo/platforms/ios/build/device/Payload/demo.app"
```
