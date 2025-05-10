const path = require('path')

const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

config.resolver.unstable_enablePackageExports = false;

config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  zustand: path.resolve(__dirname, 'node_modules/zustand/traditional'),
}


module.exports = withNativeWind(config, { input: './global.css' });
