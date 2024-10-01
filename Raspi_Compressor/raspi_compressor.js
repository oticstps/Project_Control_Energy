[
    {
        "id": "5f3967ac1d9233da",
        "type": "tab",
        "label": "core",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "f2d9488a721a27aa",
        "type": "modbus-read",
        "z": "5f3967ac1d9233da",
        "name": "",
        "topic": "",
        "showStatusActivities": false,
        "logIOActivities": false,
        "showErrors": false,
        "showWarnings": true,
        "unitid": "1",
        "dataType": "HoldingRegister",
        "adr": "2030",
        "quantity": "2",
        "rate": "2",
        "rateUnit": "s",
        "delayOnStart": false,
        "startDelayTime": "",
        "server": "1985c74b521b86c3",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": false,
        "x": 145,
        "y": 70,
        "wires": [
            [
                "b42346310123d251"
            ],
            []
        ]
    },
    {
        "id": "f3d9488a721a27ab",
        "type": "modbus-read",
        "z": "5f3967ac1d9233da",
        "name": "Current - Ph A",
        "topic": "",
        "showStatusActivities": false,
        "logIOActivities": false,
        "showErrors": false,
        "showWarnings": true,
        "unitid": "1",
        "dataType": "HoldingRegister",
        "adr": "3000",
        "quantity": "2",
        "rate": "2",
        "rateUnit": "s",
        "delayOnStart": false,
        "startDelayTime": "",
        "server": "1985c74b521b86c3",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": false,
        "x": 145,
        "y": 130,
        "wires": [
            [
                "b42346310123d251"
            ],
            []
        ]
    },
    {
        "id": "f3d9488a721a27ad",
        "type": "modbus-read",
        "z": "5f3967ac1d9233da",
        "name": "Current - Avg",
        "topic": "",
        "showStatusActivities": false,
        "logIOActivities": false,
        "showErrors": false,
        "showWarnings": true,
        "unitid": "1",
        "dataType": "HoldingRegister",
        "adr": "3010",
        "quantity": "2",
        "rate": "2",
        "rateUnit": "s",
        "delayOnStart": false,
        "startDelayTime": "",
        "server": "1985c74b521b86c3",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": false,
        "x": 145,
        "y": 335,
        "wires": [
            [
                "b42346310123d254"
            ],
            []
        ]
    },
    {
        "id": "7c457501ed6b1598",
        "type": "modbus-read",
        "z": "5f3967ac1d9233da",
        "name": "Voltage - Avg L-L",
        "topic": "",
        "showStatusActivities": false,
        "logIOActivities": false,
        "showErrors": false,
        "showWarnings": true,
        "unitid": "1",
        "dataType": "HoldingRegister",
        "adr": "3026",
        "quantity": "2",
        "rate": "2",
        "rateUnit": "s",
        "delayOnStart": false,
        "startDelayTime": "",
        "server": "1985c74b521b86c3",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": false,
        "x": 155,
        "y": 385,
        "wires": [
            [
                "196d651c0b57fc11"
            ],
            []
        ]
    },
    {
        "id": "f817e2082f21557d",
        "type": "modbus-read",
        "z": "5f3967ac1d9233da",
        "name": "Voltage - Avg L-N",
        "topic": "",
        "showStatusActivities": false,
        "logIOActivities": false,
        "showErrors": false,
        "showWarnings": true,
        "unitid": "1",
        "dataType": "HoldingRegister",
        "adr": "3036",
        "quantity": "2",
        "rate": "2",
        "rateUnit": "s",
        "delayOnStart": false,
        "startDelayTime": "",
        "server": "1985c74b521b86c3",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": false,
        "x": 155,
        "y": 435,
        "wires": [
            [
                "7b21ead1950cc417"
            ],
            []
        ]
    },
    {
        "id": "ba390c8ad6769a88",
        "type": "modbus-read",
        "z": "5f3967ac1d9233da",
        "name": "Frequency",
        "topic": "",
        "showStatusActivities": false,
        "logIOActivities": false,
        "showErrors": false,
        "showWarnings": true,
        "unitid": "1",
        "dataType": "HoldingRegister",
        "adr": "3110",
        "quantity": "2",
        "rate": "2",
        "rateUnit": "s",
        "delayOnStart": false,
        "startDelayTime": "",
        "server": "1985c74b521b86c3",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": false,
        "x": 135,
        "y": 485,
        "wires": [
            [
                "85dec48c63bebf5b"
            ],
            []
        ]
    },
    {
        "id": "3bc91672a09afcbd",
        "type": "modbus-read",
        "z": "5f3967ac1d9233da",
        "name": "Active Power - Total",
        "topic": "",
        "showStatusActivities": false,
        "logIOActivities": false,
        "showErrors": false,
        "showWarnings": true,
        "unitid": "1",
        "dataType": "HoldingRegister",
        "adr": "3060",
        "quantity": "2",
        "rate": "2",
        "rateUnit": "s",
        "delayOnStart": false,
        "startDelayTime": "",
        "server": "1985c74b521b86c3",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": false,
        "x": 165,
        "y": 560,
        "wires": [
            [
                "b74904beac549075"
            ],
            []
        ]
    },
    {
        "id": "a7499bf09e0b2ff0",
        "type": "modbus-read",
        "z": "5f3967ac1d9233da",
        "name": "Current - Ph B",
        "topic": "",
        "showStatusActivities": false,
        "logIOActivities": false,
        "showErrors": false,
        "showWarnings": true,
        "unitid": "1",
        "dataType": "HoldingRegister",
        "adr": "3002",
        "quantity": "2",
        "rate": "2",
        "rateUnit": "s",
        "delayOnStart": false,
        "startDelayTime": "",
        "server": "1985c74b521b86c3",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": false,
        "x": 145,
        "y": 175,
        "wires": [
            [
                "b42346310123d251"
            ],
            []
        ]
    },
    {
        "id": "ea13ee581569536b",
        "type": "modbus-read",
        "z": "5f3967ac1d9233da",
        "name": "Current - Ph C",
        "topic": "",
        "showStatusActivities": false,
        "logIOActivities": false,
        "showErrors": false,
        "showWarnings": true,
        "unitid": "1",
        "dataType": "HoldingRegister",
        "adr": "3004",
        "quantity": "2",
        "rate": "2",
        "rateUnit": "s",
        "delayOnStart": false,
        "startDelayTime": "",
        "server": "1985c74b521b86c3",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": false,
        "x": 145,
        "y": 220,
        "wires": [
            [
                "b42346310123d251"
            ],
            []
        ]
    },
    {
        "id": "b42346310123d251",
        "type": "debug",
        "z": "5f3967ac1d9233da",
        "name": "debug 1",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 345,
        "y": 60,
        "wires": []
    },
    {
        "id": "f3d9488a721a27ac",
        "type": "modbus-read",
        "z": "5f3967ac1d9233da",
        "name": "Voltage - A-B",
        "topic": "",
        "showStatusActivities": false,
        "logIOActivities": false,
        "showErrors": false,
        "showWarnings": true,
        "unitid": "1",
        "dataType": "HoldingRegister",
        "adr": "3020",
        "quantity": "2",
        "rate": "2",
        "rateUnit": "s",
        "delayOnStart": false,
        "startDelayTime": "",
        "server": "1985c74b521b86c3",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": false,
        "x": 380,
        "y": 110,
        "wires": [
            [
                "b42346310123d253"
            ],
            []
        ]
    },
    {
        "id": "b42346310123d253",
        "type": "debug",
        "z": "5f3967ac1d9233da",
        "name": "Voltage - A-B",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "statusVal": "",
        "statusType": "auto",
        "x": 550,
        "y": 65,
        "wires": []
    },
    {
        "id": "b42346310123d254",
        "type": "debug",
        "z": "5f3967ac1d9233da",
        "name": "Current - Avg",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 350,
        "y": 295,
        "wires": []
    },
    {
        "id": "196d651c0b57fc11",
        "type": "debug",
        "z": "5f3967ac1d9233da",
        "name": "Voltage - Avg L-L",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 370,
        "y": 340,
        "wires": []
    },
    {
        "id": "7b21ead1950cc417",
        "type": "debug",
        "z": "5f3967ac1d9233da",
        "name": "Voltage - Avg L-N",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 370,
        "y": 385,
        "wires": []
    },
    {
        "id": "85dec48c63bebf5b",
        "type": "debug",
        "z": "5f3967ac1d9233da",
        "name": "Frequency",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 350,
        "y": 430,
        "wires": []
    },
    {
        "id": "b74904beac549075",
        "type": "debug",
        "z": "5f3967ac1d9233da",
        "name": "Active Power - Ph A",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "statusVal": "",
        "statusType": "auto",
        "x": 380,
        "y": 485,
        "wires": []
    },
    {
        "id": "9b22579bb824285b",
        "type": "modbus-read",
        "z": "5f3967ac1d9233da",
        "name": "Voltage - B-C",
        "topic": "",
        "showStatusActivities": false,
        "logIOActivities": false,
        "showErrors": false,
        "showWarnings": true,
        "unitid": "1",
        "dataType": "HoldingRegister",
        "adr": "3022",
        "quantity": "2",
        "rate": "2",
        "rateUnit": "s",
        "delayOnStart": false,
        "startDelayTime": "",
        "server": "1985c74b521b86c3",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": false,
        "x": 380,
        "y": 160,
        "wires": [
            [
                "b42346310123d253"
            ],
            []
        ]
    },
    {
        "id": "d7c4c1f171430ddc",
        "type": "modbus-read",
        "z": "5f3967ac1d9233da",
        "name": "Voltage - C-A",
        "topic": "",
        "showStatusActivities": false,
        "logIOActivities": false,
        "showErrors": false,
        "showWarnings": true,
        "unitid": "1",
        "dataType": "HoldingRegister",
        "adr": "3024",
        "quantity": "2",
        "rate": "2",
        "rateUnit": "s",
        "delayOnStart": false,
        "startDelayTime": "",
        "server": "1985c74b521b86c3",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": false,
        "x": 380,
        "y": 205,
        "wires": [
            [
                "b42346310123d253"
            ],
            []
        ]
    },
    {
        "id": "1985c74b521b86c3",
        "type": "modbus-client",
        "name": "",
        "clienttype": "tcp",
        "bufferCommands": true,
        "stateLogEnabled": false,
        "queueLogEnabled": false,
        "failureLogEnabled": true,
        "tcpHost": "169.254.0.10",
        "tcpPort": "502",
        "tcpType": "DEFAULT",
        "serialPort": "/dev/ttyUSB",
        "serialType": "RTU-BUFFERD",
        "serialBaudrate": "9600",
        "serialDatabits": "8",
        "serialStopbits": "1",
        "serialParity": "none",
        "serialConnectionDelay": "100",
        "serialAsciiResponseStartDelimiter": "0x3A",
        "unit_id": "1",
        "commandDelay": "1",
        "clientTimeout": "1000",
        "reconnectOnTimeout": true,
        "reconnectTimeout": "2000",
        "parallelUnitIdsAllowed": true,
        "showErrors": false,
        "showWarnings": true,
        "showLogs": true
    }
]
