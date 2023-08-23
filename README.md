# Shimmering Thoughts

## Description
a simple react native app for collecting thought models


## Development setup

## Testing
### Unit tests
```bash
npm test
```

### E2E tests
#### Setup
* Not sure if this should be checked in so run: `npx expo prebuild` to create the ios and android projects for e2e
* Install applesimutils:
```bash
brew tap wix/brew
brew install applesimutils
```


#### Running the tests
```bash
npm run e2e
```
this will run 
```bash
npm run e2e:build // npx detox build --configuration ios.release
npm run e2e:ios // npx detox test --configuration ios.release --cleanup
```
Will add android later