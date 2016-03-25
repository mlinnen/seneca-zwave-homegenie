# seneca-zwave-homegenie
## Exposes [HomeGenie's](http://www.homegenie.it/) Z-Wave REST API as a [Seneca](http://senecajs.org) Service
This service will respond to Seneca actions and turn them into HomeGenie API calls.  Currently this only supports making calls to the 
[Z-Wave Control API](http://genielabs.github.io/HomeGenie/api/mig/mig_api_zwave.html#5). 

## Install
Since Seneca and this service are built on top of [Node.js](https://nodejs.org) you will need to have it installed.
Clone this repository into a directory of your choice and run the following command:
```sh
npm install
```

## Examples
TODO

## Actions

### ACTION: role:zwave, cmd:control_on
Turn on a Z-Wave dimmer, lamp or applicance module using this action.
* _id_: the z-wave id of the device you want the action to be applied to

### ACTION: role:zwave, cmd:control_off
Turn off a Z-Wave dimmer, lamp or applicance module using this action.
* _id_: the z-wave id of the device you want the action to be applied to

### ACTION: role:zwave, cmd:control_level
Set the light level off a Z-Wave dimmer using this action.
* _id_: the z-wave id of the device you want the action to be applied to
* _level_: the light level (0-99)
