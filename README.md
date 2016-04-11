# seneca-zwave-homegenie
## Exposes [HomeGenie's](http://www.homegenie.it/) Z-Wave REST API as a [Seneca](http://senecajs.org) Service
This service will respond to Seneca actions and turn them into HomeGenie API calls.  Currently this only supports making calls to the 
[Z-Wave Control API](http://genielabs.github.io/HomeGenie/api/mig/mig_api_zwave.html#5). 

[![npm version](https://badge.fury.io/js/seneca-zwave-homegenie.svg)](https://www.npmjs.com/package/seneca-zwave-homegenie)
[![Build Status](https://travis-ci.org/mlinnen/seneca-zwave-homegenie.svg)](https://travis-ci.org/mlinnen/seneca-zwave-homegenie)

## Install
Since Seneca and this service are built on top of [Node.js](https://nodejs.org) you will need to have it installed.
To install this plugin run the following:
```
npm install seneca
npm install
```
Make sure you have enabled the HomeGenie REST API so that this module can talk to it.

## Quick Example
Make sure you have already done the install steps to get the seneca and seneca-zwave-homegenie modules in your working folder. 

```
var seneca = require('seneca')();

// baseurl is the IP for the Home Genie API
seneca.use('seneca-zwave-homegenie',{
    baseurl: 'http://192.168.0.18'
});

// turn on zwave device #8
seneca.act({role: 'zwave', cmd: 'control_on', id: 8}, console.log);
```

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
- Add support for events when a zwave device changes state either by this module or some other source
- Add tests
- Add support for more Z-Wave devices like a Multi Sensor or a Thermostat
- Add a build process

