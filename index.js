// import React, { NativeModules } from 'react-native';
// module.exports = NativeModules.ScreenRecorderModule;

'use strict'

const { NativeModules } = require('react-native');
const { ScreenRecorderManager } = NativeModules;

const DEFAULT_OPTIONS = {
  title: 'Select a Photo',
  cancelButtonTitle: 'Cancel',
  takePhotoButtonTitle: 'Take Photo¡­',
  chooseFromLibraryButtonTitle: 'Choose from Library¡­',
  quality: 1.0,
  allowsEditing: false,
  permissionDenied: {
    title: 'Permission denied',
    text: 'To be able to take pictures with your camera and choose images from your library.',
    reTryTitle: 're-try',
    okTitle: 'I\'m sure',
  }
};

module.exports = {
  ...ScreenRecorderManager,
  showImagePicker: function showImagePicker(options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    return ImagePickerManager.showImagePicker({...DEFAULT_OPTIONS, ...options}, callback)
  }
}