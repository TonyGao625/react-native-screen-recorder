# react-native-screen-recorder

Install

NOTE: THIS PACKAGE IS NOW BUILT FOR REACT NATIVE 0.40 OR GREATER! IF YOU NEED TO SUPPORT REACT NATIVE < 0.40, YOU SHOULD INSTALL THIS PACKAGE @0.24
npm install react-native-screen-recorder --save

or yarn install react-native-screen-recorder

Manual Installation

Android
Add the following lines to android/settings.gradle:

include ':react-native-screen-recorder'
project(':react-native-screen-recorder').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-screen-recorder/android')
Update the android build tools version to 2.2.+ in android/build.gradle:

buildscript {
    ...
    dependencies {
        classpath 'com.android.tools.build:gradle:2.2.+' // <- USE 2.2.+ version
    }
    ...
}
...
Update the gradle version to 2.14.1 in android/gradle/wrapper/gradle-wrapper.properties:

...distributionUrl=https\://services.gradle.org/distributions/gradle-2.14.1-all.zip
Add the compile line to the dependencies in android/app/build.gradle:

dependencies {
    compile project(':react-native-screen-recorder')
}
Add the required permissions in AndroidManifest.xml:

<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>

Add the import and link the package in MainApplication.java:

import com.shinetechchina.react_native_screen_recorder.RecordService;
import com.shinetechchina.react_native_screen_recorder.ScreenRecorderPackage; // <-- add this import

public class MainApplication extends Application implements ReactApplication {
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
             new ScreenRecorderPackage() // <-- add this line
        );
    }
      @Override
     public void onCreate() {
        super.onCreate();
         SoLoader.init(this, /* native exopackage */ false);
         startService(new Intent(this, RecordService.class));  // <-- add this line
  }
}

Usage
var ScreenRecorderManager =require('react-native-screen-recorder') 

export default class App extends Component<Props> {
  start() {
    ScreenRecorderManager.start()
  }
  stop() {
    ScreenRecorderManager.stop()
  }
  render() {
    return (
      <View style={styles.container}>
       <Button
          onPress={this.start}
          title="start"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={this.stop}
          title="stop"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

if you stop record, you will notice that a directory called ScreenRecord will be created in your root directory of your SD card.

A mp4 file will be created in that directory.




