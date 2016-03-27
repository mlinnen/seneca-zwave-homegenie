# seneca-zwave-homegenie
## Exposes [HomeGenie's](http://www.homegenie.it/) Z-Wave REST API as a [Seneca](http://senecajs.org) Service
This service will respond to Seneca actions and turn them into HomeGenie API calls.  Currently this only supports making calls to the 
[Z-Wave Control API](http://genielabs.github.io/HomeGenie/api/mig/mig_api_zwave.html#5). 

## Install
Since Seneca and this service are built on top of [Node.js](https://nodejs.org) you will need to have it installed.
Clone this repository into a directory of your choice and run the following command:
```
npm install
```
Make sure you have enabled the HomeGenie REST API so that this module can talk to it.

## Examples
Make sure you have already done the install steps to get the source and the dependencies installed on your system. 

1. Change the _baseurl_ in examples file to match your setup for where the HomeGenie REST API is installed.
2. Change the id in example files to match what zwave device that you have
3. Open up a command or shell prompt and navigate to the directory where you installed the source
4. Run the following

 ```
 node examples\zwave-test-on.js
 ```

7. Run the following to turn off the zwave device

 ```
 node examples\zwave-test-off.js
 ```
Your zwave device should tunr on and off. 

## Actions

### ACTION: role:zwave, cmd:control_on
Turn on a Z-Wave dimmer, lamp or applicance module using this action.
- _id_: the z-wave id of the device you want the action to be applied to

### ACTION: role:zwave, cmd:control_off
Turn off a Z-Wave dimmer, lamp or applicance module using this action.
- _id_: the z-wave id of the device you want the action to be applied to

### ACTION: role:zwave, cmd:control_level
Set the light level off a Z-Wave dimmer using this action.
- _id_: the z-wave id of the device you want the action to be applied to
- _level_: the light level (0-99)


## Roadmap
These are a few items I think this module could use to make it more useful.  I don't have any plans on
when the following will be done or in what order.
- Convert this into a plugin
- ~~Make the _baseurl_ easier to set without modifying the module~~ This is an option now.
- Add support for events when a zwave device changes state either by this module or some other source
- Add tests
- Add support for more Z-Wave devices like a Multi Sensor or a Thermostat
- Add more examples
- Add a build process
- Make this an NPM package

