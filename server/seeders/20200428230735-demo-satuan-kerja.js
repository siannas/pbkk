'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const IndukSatkerId = [{
        "IndukSatKerId": "EB863F41-40E6-4EBE-BF0B-D30F8037E4A7"
      },
      {
        "IndukSatKerId": "4D589734-7E1D-41C4-9A56-5A0CC536AC60"
      },
      {
        "IndukSatKerId": "4D589734-7E1D-41C4-9A56-5A0CC536AC60"
      },
      {
        "IndukSatKerId": "4D589734-7E1D-41C4-9A56-5A0CC536AC60"
      },
      {
        "IndukSatKerId": "4D589734-7E1D-41C4-9A56-5A0CC536AC60"
      },
      {
        "IndukSatKerId": "4D589734-7E1D-41C4-9A56-5A0CC536AC60"
      },
      {
        "IndukSatKerId": "4D589734-7E1D-41C4-9A56-5A0CC536AC60"
      },
      {
        "IndukSatKerId": "4D589734-7E1D-41C4-9A56-5A0CC536AC60"
      },
      {
        "IndukSatKerId": "4D589734-7E1D-41C4-9A56-5A0CC536AC60"
      },
      {
        "IndukSatKerId": "4D589734-7E1D-41C4-9A56-5A0CC536AC60"
      },
      {
        "IndukSatKerId": "4D589734-7E1D-41C4-9A56-5A0CC536AC60"
      },
      {
        "IndukSatKerId": "4D589734-7E1D-41C4-9A56-5A0CC536AC60"
      },
      {
        "IndukSatKerId": "4D589734-7E1D-41C4-9A56-5A0CC536AC60"
      },
      {
        "IndukSatKerId": "9EA19A31-6B43-4B65-937E-7D32B38D615B"
      },
      {
        "IndukSatKerId": "4D589734-7E1D-41C4-9A56-5A0CC536AC60"
      },
      {
        "IndukSatKerId": "9EA19A31-6B43-4B65-937E-7D32B38D615B"
      },
      {
        "IndukSatKerId": "9EA19A31-6B43-4B65-937E-7D32B38D615B"
      },
      {
        "IndukSatKerId": "6CF096E8-A3EC-4DE9-9DE5-6020C794EF41"
      },
      {
        "IndukSatKerId": "86B420A2-2FF0-44FD-A3CA-E150154A1D96"
      },
      {
        "IndukSatKerId": "A2883805-6446-4F7F-882D-49D57678434A"
      },
      {
        "IndukSatKerId": "6CF096E8-A3EC-4DE9-9DE5-6020C794EF41"
      },
      {
        "IndukSatKerId": "A2883805-6446-4F7F-882D-49D57678434A"
      },
      {
        "IndukSatKerId": "A2883805-6446-4F7F-882D-49D57678434A"
      },
      {
        "IndukSatKerId": "6CF096E8-A3EC-4DE9-9DE5-6020C794EF41"
      },
      {
        "IndukSatKerId": "86B420A2-2FF0-44FD-A3CA-E150154A1D96"
      },
      {
        "IndukSatKerId": "86B420A2-2FF0-44FD-A3CA-E150154A1D96"
      },
      {
        "IndukSatKerId": "4D589734-7E1D-41C4-9A56-5A0CC536AC60"
      },
      {
        "IndukSatKerId": "4D589734-7E1D-41C4-9A56-5A0CC536AC60"
      },
      {
        "IndukSatKerId": "653BB177-83F9-4758-BA4F-F49B82099F6A"
      },
      {
        "IndukSatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064"
      },
      {
        "IndukSatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908"
      },
      {
        "IndukSatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908"
      },
      {
        "IndukSatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908"
      },
      {
        "IndukSatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064"
      },
      {
        "IndukSatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064"
      },
      {
        "IndukSatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064"
      },
      {
        "IndukSatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064"
      },
      {
        "IndukSatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832"
      },
      {
        "IndukSatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832"
      },
      {
        "IndukSatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832"
      },
      {
        "IndukSatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832"
      },
      {
        "IndukSatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832"
      },
      {
        "IndukSatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832"
      },
      {
        "IndukSatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894"
      },
      {
        "IndukSatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83"
      },
      {
        "IndukSatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83"
      },
      {
        "IndukSatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894"
      },
      {
        "IndukSatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894"
      },
      {
        "IndukSatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894"
      },
      {
        "IndukSatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894"
      },
      {
        "IndukSatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894"
      },
      {
        "IndukSatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83"
      },
      {
        "IndukSatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F"
      },
      {
        "IndukSatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83"
      },
      {
        "IndukSatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83"
      },
      {
        "IndukSatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83"
      },
      {
        "IndukSatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8"
      },
      {
        "IndukSatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F"
      },
      {
        "IndukSatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F"
      },
      {
        "IndukSatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F"
      },
      {
        "IndukSatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F"
      },
      {
        "IndukSatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F"
      },
      {
        "IndukSatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908"
      },
      {
        "IndukSatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8"
      },
      {
        "IndukSatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8"
      },
      {
        "IndukSatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908"
      },
      {
        "IndukSatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908"
      },
      {
        "IndukSatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8"
      },
      {
        "IndukSatKerId": "88211E05-DE13-4131-8082-7594ADA2C244"
      },
      {
        "IndukSatKerId": "88211E05-DE13-4131-8082-7594ADA2C244"
      },
      {
        "IndukSatKerId": "88211E05-DE13-4131-8082-7594ADA2C244"
      },
      {
        "IndukSatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B"
      },
      {
        "IndukSatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B"
      },
      {
        "IndukSatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B"
      },
      {
        "IndukSatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0"
      },
      {
        "IndukSatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0"
      },
      {
        "IndukSatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0"
      },
      {
        "IndukSatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F"
      },
      {
        "IndukSatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72"
      },
      {
        "IndukSatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72"
      },
      {
        "IndukSatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF"
      },
      {
        "IndukSatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B"
      },
      {
        "IndukSatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B"
      },
      {
        "IndukSatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B"
      },
      {
        "IndukSatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1"
      },
      {
        "IndukSatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066"
      },
      {
        "IndukSatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066"
      },
      {
        "IndukSatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066"
      },
      {
        "IndukSatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621"
      },
      {
        "IndukSatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E"
      },
      {
        "IndukSatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7"
      },
      {
        "IndukSatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF"
      },
      {
        "IndukSatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645"
      },
      {
        "IndukSatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494"
      },
      {
        "IndukSatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A"
      },
      {
        "IndukSatKerId": "98836514-9A35-4007-8433-D2C0899E967F"
      },
      {
        "IndukSatKerId": "98836514-9A35-4007-8433-D2C0899E967F"
      },
      {
        "IndukSatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6"
      },
      {
        "IndukSatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6"
      },
      {
        "IndukSatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC"
      },
      {
        "IndukSatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC"
      },
      {
        "IndukSatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010"
      },
      {
        "IndukSatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010"
      },
      {
        "IndukSatKerId": "583057BB-7885-469E-A908-8734472EC3C5"
      },
      {
        "IndukSatKerId": "583057BB-7885-469E-A908-8734472EC3C5"
      },
      {
        "IndukSatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82"
      },
      {
        "IndukSatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82"
      },
      {
        "IndukSatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19"
      },
      {
        "IndukSatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9"
      },
      {
        "IndukSatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B"
      },
      {
        "IndukSatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B"
      },
      {
        "IndukSatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A"
      },
      {
        "IndukSatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A"
      },
      {
        "IndukSatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F"
      },
      {
        "IndukSatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F"
      },
      {
        "IndukSatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F"
      },
      {
        "IndukSatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2"
      },
      {
        "IndukSatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2"
      },
      {
        "IndukSatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C"
      },
      {
        "IndukSatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C"
      },
      {
        "IndukSatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C"
      },
      {
        "IndukSatKerId": "99F05421-F893-4226-A415-3A8E17EADE38"
      },
      {
        "IndukSatKerId": "99F05421-F893-4226-A415-3A8E17EADE38"
      },
      {
        "IndukSatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8"
      },
      {
        "IndukSatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8"
      },
      {
        "IndukSatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8"
      },
      {
        "IndukSatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8"
      },
      {
        "IndukSatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8"
      },
      {
        "IndukSatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8"
      },
      {
        "IndukSatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6"
      },
      {
        "IndukSatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6"
      },
      {
        "IndukSatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6"
      },
      {
        "IndukSatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600"
      },
      {
        "IndukSatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600"
      },
      {
        "IndukSatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600"
      },
      {
        "IndukSatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC"
      },
      {
        "IndukSatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC"
      },
      {
        "IndukSatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346"
      },
      {
        "IndukSatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346"
      },
      {
        "IndukSatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346"
      },
      {
        "IndukSatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61"
      },
      {
        "IndukSatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61"
      },
      {
        "IndukSatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61"
      },
      {
        "IndukSatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14"
      },
      {
        "IndukSatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14"
      },
      {
        "IndukSatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14"
      },
      {
        "IndukSatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B"
      },
      {
        "IndukSatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B"
      },
      {
        "IndukSatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B"
      },
      {
        "IndukSatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B"
      },
      {
        "IndukSatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B"
      },
      {
        "IndukSatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B"
      },
      {
        "IndukSatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B"
      },
      {
        "IndukSatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B"
      },
      {
        "IndukSatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B"
      },
      {
        "IndukSatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B"
      },
      {
        "IndukSatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B"
      },
      {
        "IndukSatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14"
      },
      {
        "IndukSatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14"
      },
      {
        "IndukSatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14"
      },
      {
        "IndukSatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14"
      },
      {
        "IndukSatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14"
      },
      {
        "IndukSatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14"
      },
      {
        "IndukSatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61"
      },
      {
        "IndukSatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61"
      },
      {
        "IndukSatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61"
      },
      {
        "IndukSatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61"
      },
      {
        "IndukSatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61"
      },
      {
        "IndukSatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346"
      },
      {
        "IndukSatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346"
      },
      {
        "IndukSatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346"
      },
      {
        "IndukSatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346"
      },
      {
        "IndukSatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346"
      },
      {
        "IndukSatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC"
      },
      {
        "IndukSatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC"
      },
      {
        "IndukSatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC"
      },
      {
        "IndukSatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC"
      },
      {
        "IndukSatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC"
      },
      {
        "IndukSatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC"
      },
      {
        "IndukSatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC"
      },
      {
        "IndukSatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600"
      },
      {
        "IndukSatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600"
      },
      {
        "IndukSatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600"
      },
      {
        "IndukSatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600"
      },
      {
        "IndukSatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600"
      },
      {
        "IndukSatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6"
      },
      {
        "IndukSatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6"
      },
      {
        "IndukSatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6"
      },
      {
        "IndukSatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6"
      },
      {
        "IndukSatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6"
      },
      {
        "IndukSatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6"
      },
      {
        "IndukSatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6"
      },
      {
        "IndukSatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6"
      },
      {
        "IndukSatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6"
      },
      {
        "IndukSatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8"
      },
      {
        "IndukSatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8"
      },
      {
        "IndukSatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8"
      },
      {
        "IndukSatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8"
      },
      {
        "IndukSatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8"
      },
      {
        "IndukSatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8"
      },
      {
        "IndukSatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8"
      },
      {
        "IndukSatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8"
      },
      {
        "IndukSatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8"
      },
      {
        "IndukSatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8"
      },
      {
        "IndukSatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8"
      },
      {
        "IndukSatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8"
      },
      {
        "IndukSatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8"
      },
      {
        "IndukSatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8"
      },
      {
        "IndukSatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8"
      },
      {
        "IndukSatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8"
      },
      {
        "IndukSatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8"
      },
      {
        "IndukSatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8"
      },
      {
        "IndukSatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8"
      },
      {
        "IndukSatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8"
      },
      {
        "IndukSatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8"
      },
      {
        "IndukSatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8"
      },
      {
        "IndukSatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8"
      },
      {
        "IndukSatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8"
      },
      {
        "IndukSatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8"
      },
      {
        "IndukSatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8"
      },
      {
        "IndukSatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8"
      },
      {
        "IndukSatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8"
      },
      {
        "IndukSatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8"
      },
      {
        "IndukSatKerId": "99F05421-F893-4226-A415-3A8E17EADE38"
      },
      {
        "IndukSatKerId": "99F05421-F893-4226-A415-3A8E17EADE38"
      },
      {
        "IndukSatKerId": "99F05421-F893-4226-A415-3A8E17EADE38"
      },
      {
        "IndukSatKerId": "99F05421-F893-4226-A415-3A8E17EADE38"
      },
      {
        "IndukSatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C"
      },
      {
        "IndukSatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C"
      },
      {
        "IndukSatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C"
      },
      {
        "IndukSatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C"
      },
      {
        "IndukSatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C"
      },
      {
        "IndukSatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2"
      },
      {
        "IndukSatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2"
      },
      {
        "IndukSatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2"
      },
      {
        "IndukSatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2"
      },
      {
        "IndukSatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2"
      },
      {
        "IndukSatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F"
      },
      {
        "IndukSatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F"
      },
      {
        "IndukSatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F"
      },
      {
        "IndukSatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F"
      },
      {
        "IndukSatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F"
      },
      {
        "IndukSatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F"
      },
      {
        "IndukSatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A"
      },
      {
        "IndukSatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A"
      },
      {
        "IndukSatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A"
      },
      {
        "IndukSatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A"
      },
      {
        "IndukSatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B"
      },
      {
        "IndukSatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82"
      },
      {
        "IndukSatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82"
      },
      {
        "IndukSatKerId": "583057BB-7885-469E-A908-8734472EC3C5"
      },
      {
        "IndukSatKerId": "583057BB-7885-469E-A908-8734472EC3C5"
      },
      {
        "IndukSatKerId": "583057BB-7885-469E-A908-8734472EC3C5"
      },
      {
        "IndukSatKerId": "583057BB-7885-469E-A908-8734472EC3C5"
      },
      {
        "IndukSatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010"
      },
      {
        "IndukSatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010"
      },
      {
        "IndukSatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010"
      },
      {
        "IndukSatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010"
      },
      {
        "IndukSatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC"
      },
      {
        "IndukSatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC"
      },
      {
        "IndukSatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC"
      },
      {
        "IndukSatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6"
      },
      {
        "IndukSatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6"
      },
      {
        "IndukSatKerId": "98836514-9A35-4007-8433-D2C0899E967F"
      },
      {
        "IndukSatKerId": "98836514-9A35-4007-8433-D2C0899E967F"
      },
      {
        "IndukSatKerId": "98836514-9A35-4007-8433-D2C0899E967F"
      },
      {
        "IndukSatKerId": "98836514-9A35-4007-8433-D2C0899E967F"
      },
      {
        "IndukSatKerId": "98836514-9A35-4007-8433-D2C0899E967F"
      },
      {
        "IndukSatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645"
      },
      {
        "IndukSatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645"
      },
      {
        "IndukSatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645"
      },
      {
        "IndukSatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF"
      },
      {
        "IndukSatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF"
      },
      {
        "IndukSatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF"
      },
      {
        "IndukSatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF"
      },
      {
        "IndukSatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF"
      },
      {
        "IndukSatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF"
      },
      {
        "IndukSatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7"
      },
      {
        "IndukSatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7"
      },
      {
        "IndukSatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E"
      },
      {
        "IndukSatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E"
      },
      {
        "IndukSatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E"
      },
      {
        "IndukSatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621"
      },
      {
        "IndukSatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621"
      },
      {
        "IndukSatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066"
      },
      {
        "IndukSatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066"
      },
      {
        "IndukSatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066"
      },
      {
        "IndukSatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066"
      },
      {
        "IndukSatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066"
      },
      {
        "IndukSatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066"
      },
      {
        "IndukSatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066"
      },
      {
        "IndukSatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066"
      },
      {
        "IndukSatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1"
      },
      {
        "IndukSatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1"
      },
      {
        "IndukSatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1"
      },
      {
        "IndukSatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B"
      },
      {
        "IndukSatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B"
      },
      {
        "IndukSatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B"
      },
      {
        "IndukSatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B"
      },
      {
        "IndukSatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF"
      },
      {
        "IndukSatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF"
      },
      {
        "IndukSatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF"
      },
      {
        "IndukSatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72"
      },
      {
        "IndukSatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72"
      },
      {
        "IndukSatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72"
      },
      {
        "IndukSatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72"
      },
      {
        "IndukSatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72"
      },
      {
        "IndukSatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F"
      },
      {
        "IndukSatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F"
      },
      {
        "IndukSatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F"
      },
      {
        "IndukSatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0"
      },
      {
        "IndukSatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0"
      },
      {
        "IndukSatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0"
      },
      {
        "IndukSatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0"
      },
      {
        "IndukSatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0"
      },
      {
        "IndukSatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0"
      },
      {
        "IndukSatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0"
      },
      {
        "IndukSatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0"
      },
      {
        "IndukSatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0"
      },
      {
        "IndukSatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0"
      },
      {
        "IndukSatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0"
      },
      {
        "IndukSatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0"
      },
      {
        "IndukSatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0"
      },
      {
        "IndukSatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B"
      },
      {
        "IndukSatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B"
      },
      {
        "IndukSatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B"
      },
      {
        "IndukSatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B"
      },
      {
        "IndukSatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B"
      },
      {
        "IndukSatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B"
      },
      {
        "IndukSatKerId": "88211E05-DE13-4131-8082-7594ADA2C244"
      },
      {
        "IndukSatKerId": "88211E05-DE13-4131-8082-7594ADA2C244"
      },
      {
        "IndukSatKerId": "88211E05-DE13-4131-8082-7594ADA2C244"
      },
      {
        "IndukSatKerId": "88211E05-DE13-4131-8082-7594ADA2C244"
      },
      {
        "IndukSatKerId": "88211E05-DE13-4131-8082-7594ADA2C244"
      },
      {
        "IndukSatKerId": "8C6BA397-6B3D-4B50-8EE1-0555D54AD0AE"
      },
      {
        "IndukSatKerId": "8C6BA397-6B3D-4B50-8EE1-0555D54AD0AE"
      },
      {
        "IndukSatKerId": "8C6BA397-6B3D-4B50-8EE1-0555D54AD0AE"
      },
      {
        "IndukSatKerId": "8C6BA397-6B3D-4B50-8EE1-0555D54AD0AE"
      },
      {
        "IndukSatKerId": "8C6BA397-6B3D-4B50-8EE1-0555D54AD0AE"
      },
      {
        "IndukSatKerId": "8C6BA397-6B3D-4B50-8EE1-0555D54AD0AE"
      },
      {
        "IndukSatKerId": "9EA19A31-6B43-4B65-937E-7D32B38D615B"
      },
      {
        "IndukSatKerId": "B0EBE984-F041-4EEC-86B7-3B4730D51CCC"
      },
      {
        "IndukSatKerId": "B0EBE984-F041-4EEC-86B7-3B4730D51CCC"
      },
      {
        "IndukSatKerId": "B0A20E0A-1403-44DE-B227-CE57CE108DD4"
      },
      {
        "IndukSatKerId": "B0EBE984-F041-4EEC-86B7-3B4730D51CCC"
      },
      {
        "IndukSatKerId": "B0EBE984-F041-4EEC-86B7-3B4730D51CCC"
      },
      {
        "IndukSatKerId": "B0A20E0A-1403-44DE-B227-CE57CE108DD4"
      },
      {
        "IndukSatKerId": "141119E9-E787-4404-BBE7-DCDA67F5004C"
      },
      {
        "IndukSatKerId": "D88F8CE4-1D9D-4158-A051-37CE97C4C0DC"
      },
      {
        "IndukSatKerId": "9D7496A4-831F-4F12-800C-65A822408F27"
      },
      {
        "IndukSatKerId": "9D7496A4-831F-4F12-800C-65A822408F27"
      },
      {
        "IndukSatKerId": "D88F8CE4-1D9D-4158-A051-37CE97C4C0DC"
      },
      {
        "IndukSatKerId": "D88F8CE4-1D9D-4158-A051-37CE97C4C0DC"
      },
      {
        "IndukSatKerId": "F842552D-1213-4EF7-A667-89AFE5849ED8"
      },
      {
        "IndukSatKerId": "F842552D-1213-4EF7-A667-89AFE5849ED8"
      },
      {
        "IndukSatKerId": "CA224234-7E54-4065-B849-967650B592DA"
      },
      {
        "IndukSatKerId": "CA224234-7E54-4065-B849-967650B592DA"
      },
      {
        "IndukSatKerId": "CA224234-7E54-4065-B849-967650B592DA"
      },
      {
        "IndukSatKerId": "141119E9-E787-4404-BBE7-DCDA67F5004C"
      },
      {
        "IndukSatKerId": "E000313A-484A-497B-90E8-6B0D4196AC84"
      },
      {
        "IndukSatKerId": "E000313A-484A-497B-90E8-6B0D4196AC84"
      },
      {
        "IndukSatKerId": "5FD836DD-F667-4B03-A940-53E02CFBF189"
      },
      {
        "IndukSatKerId": "DEB74A44-FA2B-4AC4-A77A-B5278267493F"
      },
      {
        "IndukSatKerId": "09ECA3DA-8D1A-47E7-B81B-F2F20825740B"
      },
      {
        "IndukSatKerId": "09ECA3DA-8D1A-47E7-B81B-F2F20825740B"
      },
      {
        "IndukSatKerId": "A920CBA2-3BD6-4EA8-9F81-6CE2433F77A3"
      },
      {
        "IndukSatKerId": "9EB2E2FD-B5E9-47FF-8C6F-F8DD8A616CF8"
      },
      {
        "IndukSatKerId": "653BB177-83F9-4758-BA4F-F49B82099F6A"
      },
      {
        "IndukSatKerId": "C1A4DFA1-B549-49FF-8AB5-E69B0684375E"
      },
      {
        "IndukSatKerId": "142D6BC7-5395-4DBD-B63F-31524F093830"
      },
      {
        "IndukSatKerId": "142D6BC7-5395-4DBD-B63F-31524F093830"
      },
      {
        "IndukSatKerId": "B5394232-7B77-456E-B01B-6F52E95F923A"
      },
      {
        "IndukSatKerId": "B0A20E0A-1403-44DE-B227-CE57CE108DD4"
      },
      {
        "IndukSatKerId": "9D7496A4-831F-4F12-800C-65A822408F27"
      },
      {
        "IndukSatKerId": "DFB2F985-7EB5-4D3D-99D8-AB4072A5F353"
      },
      {
        "IndukSatKerId": "B5394232-7B77-456E-B01B-6F52E95F923A"
      },
      {
        "IndukSatKerId": "F842552D-1213-4EF7-A667-89AFE5849ED8"
      },
      {
        "IndukSatKerId": "141119E9-E787-4404-BBE7-DCDA67F5004C"
      },
      {
        "IndukSatKerId": "DFB2F985-7EB5-4D3D-99D8-AB4072A5F353"
      },
      {
        "IndukSatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832"
      },
      {
        "IndukSatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064"
      },
      {
        "IndukSatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908"
      },
      {
        "IndukSatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894"
      },
      {
        "IndukSatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8"
      },
      {
        "IndukSatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F"
      },
      {
        "IndukSatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83"
      },
      {
        "IndukSatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF"
      },
      {
        "IndukSatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A"
      },
      {
        "IndukSatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7"
      },
      {
        "IndukSatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19"
      },
      {
        "IndukSatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645"
      },
      {
        "IndukSatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E"
      },
      {
        "IndukSatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1"
      },
      {
        "IndukSatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621"
      },
      {
        "IndukSatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0"
      },
      {
        "IndukSatKerId": "98836514-9A35-4007-8433-D2C0899E967F"
      },
      {
        "IndukSatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066"
      },
      {
        "IndukSatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF"
      },
      {
        "IndukSatKerId": "88211E05-DE13-4131-8082-7594ADA2C244"
      },
      {
        "IndukSatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B"
      },
      {
        "IndukSatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72"
      },
      {
        "IndukSatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F"
      },
      {
        "IndukSatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B"
      },
      {
        "IndukSatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A"
      },
      {
        "IndukSatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B"
      },
      {
        "IndukSatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9"
      },
      {
        "IndukSatKerId": "583057BB-7885-469E-A908-8734472EC3C5"
      },
      {
        "IndukSatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010"
      },
      {
        "IndukSatKerId": "2FE6082F-B898-4DB0-91F6-0DB090C76FB8"
      },
      {
        "IndukSatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6"
      },
      {
        "IndukSatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC"
      },
      {
        "IndukSatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82"
      },
      {
        "IndukSatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC"
      },
      {
        "IndukSatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346"
      },
      {
        "IndukSatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14"
      },
      {
        "IndukSatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61"
      },
      {
        "IndukSatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600"
      },
      {
        "IndukSatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6"
      },
      {
        "IndukSatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8"
      },
      {
        "IndukSatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8"
      },
      {
        "IndukSatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494"
      },
      {
        "IndukSatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B"
      },
      {
        "IndukSatKerId": "99F05421-F893-4226-A415-3A8E17EADE38"
      },
      {
        "IndukSatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F"
      },
      {
        "IndukSatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C"
      },
      {
        "IndukSatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2"
      },
      {
        "IndukSatKerId": "B5E74879-ADE0-4A1D-B0F8-10713C9A2FC4"
      },
      {
        "IndukSatKerId": "B5E74879-ADE0-4A1D-B0F8-10713C9A2FC4"
      },
      {
        "IndukSatKerId": "2A46D74D-93A4-4CF7-B893-44310A74BD66"
      },
      {
        "IndukSatKerId": "78FA0758-52AF-4E0B-88CA-40DB87A3D470"
      },
      {
        "IndukSatKerId": "78FA0758-52AF-4E0B-88CA-40DB87A3D470"
      },
      {
        "IndukSatKerId": "070D3480-AB10-435D-8B7A-C8B0FF5727CF"
      },
      {
        "IndukSatKerId": "070D3480-AB10-435D-8B7A-C8B0FF5727CF"
      },
      {
        "IndukSatKerId": "548BB34D-4BF6-4F99-88FE-C9172811067A"
      },
      {
        "IndukSatKerId": "548BB34D-4BF6-4F99-88FE-C9172811067A"
      },
      {
        "IndukSatKerId": "69934B3A-3DC1-41CE-A768-231C2C06C463"
      },
      {
        "IndukSatKerId": "69934B3A-3DC1-41CE-A768-231C2C06C463"
      },
      {
        "IndukSatKerId": "F4347006-94C0-4E0B-81E6-86074CDA8E1E"
      },
      {
        "IndukSatKerId": "F4347006-94C0-4E0B-81E6-86074CDA8E1E"
      },
      {
        "IndukSatKerId": "4071986F-EB74-429B-970B-3525424F17EA"
      },
      {
        "IndukSatKerId": "89CF4FAC-CA86-4E91-9F03-5CB55F75F8CA"
      },
      {
        "IndukSatKerId": "95E9E37A-BDE9-41E7-8285-8A2D1A674B65"
      },
      {
        "IndukSatKerId": "8781C710-70E3-4C63-8C4D-02880FA294D2"
      },
      {
        "IndukSatKerId": "08045855-EF0D-4937-B005-70B303FD98F1"
      },
      {
        "IndukSatKerId": "48E2664E-B8C8-4CC0-A975-9169056151C3"
      },
      {
        "IndukSatKerId": "21146B95-05CF-4625-9A30-99E39EDB57BB"
      },
      {
        "IndukSatKerId": "416BC22F-5F72-44CB-8D2E-366DBDEF96F8"
      },
      {
        "IndukSatKerId": "416BC22F-5F72-44CB-8D2E-366DBDEF96F8"
      },
      {
        "IndukSatKerId": "416BC22F-5F72-44CB-8D2E-366DBDEF96F8"
      },
      {
        "IndukSatKerId": "B855BB50-1EDB-4174-B351-E9D815F95CC3"
      },
      {
        "IndukSatKerId": "B855BB50-1EDB-4174-B351-E9D815F95CC3"
      },
      {
        "IndukSatKerId": "6128A813-483D-4F4E-B69D-CCC725420BFD"
      },
      {
        "IndukSatKerId": "6128A813-483D-4F4E-B69D-CCC725420BFD"
      },
      {
        "IndukSatKerId": "ED3A1460-844D-4650-957F-118DD4DE2F32"
      },
      {
        "IndukSatKerId": "967C903C-FD31-47F6-A6E9-48BD8221E231"
      },
      {
        "IndukSatKerId": "A857C863-0765-4DED-9E43-518859B351A2"
      },
      {
        "IndukSatKerId": "653BB177-83F9-4758-BA4F-F49B82099F6A"
      },
      {
        "IndukSatKerId": "BA1BE635-2222-4958-9DD7-C6E015F922FB"
      },
      {
        "IndukSatKerId": "BA1BE635-2222-4958-9DD7-C6E015F922FB"
      },
      {
        "IndukSatKerId": "BA1BE635-2222-4958-9DD7-C6E015F922FB"
      },
      {
        "IndukSatKerId": "BA1BE635-2222-4958-9DD7-C6E015F922FB"
      },
      {
        "IndukSatKerId": "653BB177-83F9-4758-BA4F-F49B82099F6A"
      },
      {
        "IndukSatKerId": "C1A4DFA1-B549-49FF-8AB5-E69B0684375E"
      },
      {
        "IndukSatKerId": "C1A4DFA1-B549-49FF-8AB5-E69B0684375E"
      },
      {
        "IndukSatKerId": null
      },
      {
        "IndukSatKerId": "BDDCDA90-CF81-46A8-97C0-08E13E37FB86"
      },
      {
        "IndukSatKerId": "BDDCDA90-CF81-46A8-97C0-08E13E37FB86"
      },
      {
        "IndukSatKerId": "08045855-EF0D-4937-B005-70B303FD98F1"
      },
      {
        "IndukSatKerId": "08045855-EF0D-4937-B005-70B303FD98F1"
      },
      {
        "IndukSatKerId": "08045855-EF0D-4937-B005-70B303FD98F1"
      },
      {
        "IndukSatKerId": "8781C710-70E3-4C63-8C4D-02880FA294D2"
      },
      {
        "IndukSatKerId": "8781C710-70E3-4C63-8C4D-02880FA294D2"
      },
      {
        "IndukSatKerId": "95E9E37A-BDE9-41E7-8285-8A2D1A674B65"
      },
      {
        "IndukSatKerId": "95E9E37A-BDE9-41E7-8285-8A2D1A674B65"
      },
      {
        "IndukSatKerId": "4071986F-EB74-429B-970B-3525424F17EA"
      },
      {
        "IndukSatKerId": "4071986F-EB74-429B-970B-3525424F17EA"
      },
      {
        "IndukSatKerId": "4071986F-EB74-429B-970B-3525424F17EA"
      },
      {
        "IndukSatKerId": "ED3A1460-844D-4650-957F-118DD4DE2F32"
      },
      {
        "IndukSatKerId": "6CF096E8-A3EC-4DE9-9DE5-6020C794EF41"
      },
      {
        "IndukSatKerId": "86B420A2-2FF0-44FD-A3CA-E150154A1D96"
      },
      {
        "IndukSatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346"
      },
      {
        "IndukSatKerId": "88211E05-DE13-4131-8082-7594ADA2C244"
      },
      {
        "IndukSatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B"
      },
      {
        "IndukSatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B"
      },
      {
        "IndukSatKerId": "98836514-9A35-4007-8433-D2C0899E967F"
      },
      {
        "IndukSatKerId": "98836514-9A35-4007-8433-D2C0899E967F"
      },
      {
        "IndukSatKerId": "89CF4FAC-CA86-4E91-9F03-5CB55F75F8CA"
      },
      {
        "IndukSatKerId": "B02BFB98-B0FA-4461-BFF1-3C6EAACBB9EC"
      },
      {
        "IndukSatKerId": "B02BFB98-B0FA-4461-BFF1-3C6EAACBB9EC"
      },
      {
        "IndukSatKerId": "48E2664E-B8C8-4CC0-A975-9169056151C3"
      },
      {
        "IndukSatKerId": "BDDCDA90-CF81-46A8-97C0-08E13E37FB86"
      },
      {
        "IndukSatKerId": "BDDCDA90-CF81-46A8-97C0-08E13E37FB86"
      },
      {
        "IndukSatKerId": "BDDCDA90-CF81-46A8-97C0-08E13E37FB86"
      },
      {
        "IndukSatKerId": "BDDCDA90-CF81-46A8-97C0-08E13E37FB86"
      },
      {
        "IndukSatKerId": "BDDCDA90-CF81-46A8-97C0-08E13E37FB86"
      },
      {
        "IndukSatKerId": "BDDCDA90-CF81-46A8-97C0-08E13E37FB86"
      },
      {
        "IndukSatKerId": "BDDCDA90-CF81-46A8-97C0-08E13E37FB86"
      },
      {
        "IndukSatKerId": "BDDCDA90-CF81-46A8-97C0-08E13E37FB86"
      },
      {
        "IndukSatKerId": "BDDCDA90-CF81-46A8-97C0-08E13E37FB86"
      },
      {
        "IndukSatKerId": "BDDCDA90-CF81-46A8-97C0-08E13E37FB86"
      },
      {
        "IndukSatKerId": "BDDCDA90-CF81-46A8-97C0-08E13E37FB86"
      },
      {
        "IndukSatKerId": "BDDCDA90-CF81-46A8-97C0-08E13E37FB86"
      },
      {
        "IndukSatKerId": "BDDCDA90-CF81-46A8-97C0-08E13E37FB86"
      },
      {
        "IndukSatKerId": "86FB14D3-98A3-4B7A-BDE5-C4680E364A48"
      },
      {
        "IndukSatKerId": "86FB14D3-98A3-4B7A-BDE5-C4680E364A48"
      },
      {
        "IndukSatKerId": "86FB14D3-98A3-4B7A-BDE5-C4680E364A48"
      },
      {
        "IndukSatKerId": "86FB14D3-98A3-4B7A-BDE5-C4680E364A48"
      },
      {
        "IndukSatKerId": "86FB14D3-98A3-4B7A-BDE5-C4680E364A48"
      },
      {
        "IndukSatKerId": null
      },
      {
        "IndukSatKerId": null
      },
      {
        "IndukSatKerId": null
      },
      {
        "IndukSatKerId": null
      },
      {
        "IndukSatKerId": null
      },
      {
        "IndukSatKerId": null
      },
      {
        "IndukSatKerId": null
      },
      {
        "IndukSatKerId": null
      },
      {
        "IndukSatKerId": null
      },
      {
        "IndukSatKerId": null
      },
      {
        "IndukSatKerId": null
      },
      {
        "IndukSatKerId": null
      },
      {
        "IndukSatKerId": null
      },
      {
        "IndukSatKerId": null
      },
      {
        "IndukSatKerId": "DEB74A44-FA2B-4AC4-A77A-B5278267493F"
      },
      {
        "IndukSatKerId": null
      },
      {
        "IndukSatKerId": null
      },
      {
        "IndukSatKerId": null
      }
    ];

    return queryInterface.bulkInsert('SatuanKerjas',
      [{
          "id": "4D589734-7E1D-41C4-9A56-5A0CC536AC60",
          "nama": "Rektorat",
          "levelUnit": 1,
          "JenisSatKerId": 1,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "9EA19A31-6B43-4B65-937E-7D32B38D615B",
          "nama": "Wakil Rektor Bidang Akademik dan Kemahasiswaan",
          "levelUnit": 2,
          "JenisSatKerId": 4,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "86B420A2-2FF0-44FD-A3CA-E150154A1D96",
          "nama": "Wakil Rektor Bidang Perencanaan, Keuangan dan Sarana Prasarana",
          "levelUnit": 2,
          "JenisSatKerId": 4,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "6CF096E8-A3EC-4DE9-9DE5-6020C794EF41",
          "nama": "Wakil Rektor Bidang Sumber Daya Manusia, Organisasi dan Teknologi dan Sistem Informasi",
          "levelUnit": 2,
          "JenisSatKerId": 4,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "A2883805-6446-4F7F-882D-49D57678434A",
          "nama": "Wakil Rektor Bidang Riset, Inovasi, Kerjasama, dan Kealumnian",
          "levelUnit": 2,
          "JenisSatKerId": 4,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "08045855-EF0D-4937-B005-70B303FD98F1",
          "nama": "Sekretaris Institut",
          "levelUnit": 2,
          "JenisSatKerId": 5,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "nama": "Fakultas Sains dan Analitika Data",
          "levelUnit": 2,
          "JenisSatKerId": 6,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "nama": "Fakultas Teknologi Industri dan Rekayasa Sistem",
          "levelUnit": 2,
          "JenisSatKerId": 6,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "nama": "Fakultas Teknik Sipil, Perencanaan, dan Kebumian",
          "levelUnit": 2,
          "JenisSatKerId": 6,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "nama": "Fakultas Teknologi Kelautan",
          "levelUnit": 2,
          "JenisSatKerId": 6,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "nama": "Fakultas Teknologi Elektro dan Informatika Cerdas",
          "levelUnit": 2,
          "JenisSatKerId": 6,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "nama": "Fakultas Desain Kreatif dan Bisnis Digital",
          "levelUnit": 2,
          "JenisSatKerId": 6,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "nama": "Fakultas Vokasi",
          "levelUnit": 2,
          "JenisSatKerId": 6,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "9D7496A4-831F-4F12-800C-65A822408F27",
          "nama": "Direktorat Pendidikan",
          "levelUnit": 3,
          "JenisSatKerId": 8,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "4071986F-EB74-429B-970B-3525424F17EA",
          "nama": "Direktorat Kemitraan Global",
          "levelUnit": 2,
          "JenisSatKerId": 8,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "D88F8CE4-1D9D-4158-A051-37CE97C4C0DC",
          "nama": "Direktorat Pascasarjana dan Pengembangan Akademik",
          "levelUnit": 3,
          "JenisSatKerId": 8,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "141119E9-E787-4404-BBE7-DCDA67F5004C",
          "nama": "Direktorat Kemahasiswaan",
          "levelUnit": 3,
          "JenisSatKerId": 8,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "F842552D-1213-4EF7-A667-89AFE5849ED8",
          "nama": "Direktorat Sumber Daya Manusia dan Organisasi",
          "levelUnit": 3,
          "JenisSatKerId": 8,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "CA224234-7E54-4065-B849-967650B592DA",
          "nama": "Direktorat Perencanaan dan Pengembangan",
          "levelUnit": 3,
          "JenisSatKerId": 8,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "B0A20E0A-1403-44DE-B227-CE57CE108DD4",
          "nama": "Direktorat Riset dan Pengabdian kepada Masyarakat",
          "levelUnit": 3,
          "JenisSatKerId": 8,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "B0EBE984-F041-4EEC-86B7-3B4730D51CCC",
          "nama": "Direktorat Pengembangan Teknologi dan Sistem Informasi",
          "levelUnit": 3,
          "JenisSatKerId": 8,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "653BB177-83F9-4758-BA4F-F49B82099F6A",
          "nama": "Direktorat Inovasi dan Kawasan Sains Teknologi",
          "levelUnit": 3,
          "JenisSatKerId": 8,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "C1A4DFA1-B549-49FF-8AB5-E69B0684375E",
          "nama": "Direktorat Kerjasama dan Pengelolaan Usaha",
          "levelUnit": 3,
          "JenisSatKerId": 8,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "142D6BC7-5395-4DBD-B63F-31524F093830",
          "nama": "Biro Umum dan Reformasi Birokrasi",
          "levelUnit": 3,
          "JenisSatKerId": 9,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "DFB2F985-7EB5-4D3D-99D8-AB4072A5F353",
          "nama": "Biro Sarana dan Prasarana",
          "levelUnit": 3,
          "JenisSatKerId": 9,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "B5394232-7B77-456E-B01B-6F52E95F923A",
          "nama": "Biro Keuangan",
          "levelUnit": 3,
          "JenisSatKerId": 9,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "8781C710-70E3-4C63-8C4D-02880FA294D2",
          "nama": "Kantor Penjaminan Mutu",
          "levelUnit": 2,
          "JenisSatKerId": 11,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "95E9E37A-BDE9-41E7-8285-8A2D1A674B65",
          "nama": "Kantor Audit Internal",
          "levelUnit": 2,
          "JenisSatKerId": 11,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E911DE87-FDC5-4FCE-86F3-37C0DD63FCDD",
          "nama": "Kantor Transfer Teknologi",
          "levelUnit": 4,
          "JenisSatKerId": 11,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "nama": "Departemen Teknik Material dan Metalurgi",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "nama": "Departemen Teknik Sipil",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "nama": "Departemen Arsitektur",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "nama": "Departemen Teknik Lingkungan",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "nama": "Departemen Teknik Mesin",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "nama": "Departemen Teknik Kimia",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "nama": "Departemen Teknik Fisika",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "nama": "Departemen Teknik Sistem dan Industri",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "nama": "Departemen Aktuaria",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "nama": "Departemen Fisika",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "nama": "Departemen Matematika",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "nama": "Departemen Statistika",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "nama": "Departemen Kimia",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "99F05421-F893-4226-A415-3A8E17EADE38",
          "nama": "Departemen Biologi",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "nama": "Departemen Teknik Infrastruktur Sipil",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "nama": "Departemen Manajemen Teknologi",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "nama": "Departemen Studi Pembangunan",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "nama": "Departemen Teknik Mesin Industri",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "583057BB-7885-469E-A908-8734472EC3C5",
          "nama": "Departemen Teknik Elektro Otomasi",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "nama": "Departemen Teknik Kimia Industri",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "nama": "Departemen Teknik Instrumentasi",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "nama": "Departemen Statistika Bisnis",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "nama": "Departemen Desain Produk",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "nama": "Departemen Teknologi Informasi",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "nama": "Departemen Desain Interior",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "nama": "Departemen Desain Komunikasi Visual",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "nama": "Departemen Manajemen Bisnis",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "nama": "Departemen Teknik Transportasi Laut",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "nama": "Departemen Teknik Elektro",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "nama": "Departemen Teknik Biomedik",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "nama": "Departemen Teknik Komputer",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "nama": "Departemen Teknik Informatika",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "98836514-9A35-4007-8433-D2C0899E967F",
          "nama": "Departemen Sistem Informasi",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "nama": "Departemen Teknik Geofisika",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "nama": "Departemen Teknik Perkapalan",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "88211E05-DE13-4131-8082-7594ADA2C244",
          "nama": "Departemen Teknik Sistem Perkapalan",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "nama": "Departemen Perencanaan Wilayah dan Kota",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "nama": "Departemen Teknik Geomatika",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "nama": "Departemen Teknik Kelautan",
          "levelUnit": 3,
          "JenisSatKerId": 13,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "74D04103-5DCF-4557-82C3-390B4D8FD8DF",
          "nama": "S1 Teknik Sistem Perkapalan",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "A9CDA195-D6A5-48FD-8850-D10EF7B408CB",
          "nama": "S2 Teknik Sistem Perkapalan",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "BAC98303-FE4C-4267-A770-2BD83503BB27",
          "nama": "S3 Teknik Sistem Perkapalan",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "ECDA8D24-5C5E-4E76-8A5A-3EC2B4C7344A",
          "nama": "S1 Teknik Kelautan",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "95694686-E1E3-459D-8D9F-525B0311F3DE",
          "nama": "S2 Teknik Kelautan",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "63E1FF83-9252-46EB-AF51-F9A8C82D6195",
          "nama": "S3 Teknik Kelautan",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "AEB6DF46-624E-4716-8731-2C92E6B44D12",
          "nama": "S1 Teknik Elektro",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "7BDDBC90-7299-40EB-BF93-0EDFA0884397",
          "nama": "S2 Teknik Elektro",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "59938AD3-30EC-420F-8843-9F99DACF0962",
          "nama": "S3 Teknik Elektro",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "A5F28486-9034-4A2C-92E2-3EB0DB834AD8",
          "nama": "S1 Perencanaan Wilayah dan Kota",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "BDC675EE-DA52-45C6-8650-537DD0888258",
          "nama": "S1 Teknik Geomatika",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "7B82D43F-84DD-4DBB-91FF-65C4FB2D6B03",
          "nama": "S2 Teknik Geomatika",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "B32C6415-4830-4FF9-B0CB-A473A6D486A0",
          "nama": "S1 Teknik Geofisika",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "FF48AE67-947D-48F9-9678-87154BD475CB",
          "nama": "S1 Teknik Perkapalan",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "4A2A99CA-8CD8-4263-98DB-239643EB8A8C",
          "nama": "S2 Teknik Perkapalan",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "AD9B117B-BBDE-4731-9E3E-3B8252137780",
          "nama": "S3 Teknik Perkapalan",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "74B8A041-AF30-4F4C-BC58-8413C4C7CA37",
          "nama": "S1 Teknik Komputer",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "00EA4931-C72B-473E-8BED-AA3CA879C315",
          "nama": "S1 Teknik Informatika",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "DF343153-416C-4987-965F-B636E96F8926",
          "nama": "S2 Teknik Informatika",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "56AC82FF-3ACD-4B69-A7AD-38AFAD35ACB1",
          "nama": "S3 Teknik Informatika",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "30008160-743B-45DC-B43F-5E19DF5546CF",
          "nama": "S1 Teknik Biomedik",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "B0ED8E53-6E65-4DFA-99B8-A3C01EB04248",
          "nama": "S1 Teknik Transportasi Laut",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "04BD1D45-6260-4099-A64D-DBF72A869E72",
          "nama": "S1 Manajemen Bisnis",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "7BEA38AC-8ABC-43D3-8E52-4530DF196B63",
          "nama": "S1 Desain Produk",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "6AF518E2-CF85-4CD7-9EE3-5E4D70A3A40A",
          "nama": "S1 Desain Interior",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5A165038-9916-49F2-8A10-316C385EC359",
          "nama": "S1 Aktuaria",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "CE658191-5114-4770-B44A-A6BD39EB77F2",
          "nama": "S1 Teknologi Informasi",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5F63727D-06D2-4443-8FD7-10B73A80E7F3",
          "nama": "S1 Sistem Informasi",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "F292F0D5-FD0D-46F7-8369-77BB374DA4BB",
          "nama": "S2 Sistem Informasi",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5FD0DEE3-1343-4940-85E1-AC7ACE6C9DFC",
          "nama": "D3 Statistika Bisnis",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "09BB0863-2D66-4CE1-B4C4-F7AE10B265B6",
          "nama": "D4 Statistika Bisnis",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "509A679A-C625-4492-A800-1CA6B32EB9F7",
          "nama": "D3 Teknik Instrumentasi",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "BE48B54F-7B6D-461B-A6EF-69B1B73E19DC",
          "nama": "D4 Teknik Instrumentasi",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "CA844DCD-35BB-4FCB-AEC1-116C3031BE00",
          "nama": "D3 Teknik Mesin Industri",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "401E23C1-CDF3-4389-A205-AEF630A3B502",
          "nama": "D4 Teknik Mesin Industri",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "BA050604-B842-4F8E-ADAE-B6C22A1DBDB8",
          "nama": "D3 Teknik Elektro Otomasi",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "A064057B-AE6C-4F15-A7C7-4F8B170D0FDB",
          "nama": "D4 Teknik Elektro Otomasi",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "3FA22022-AA34-4DA3-8CC1-0C036FD8C71F",
          "nama": "D3 Teknik Kimia Industri",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "D2EA6E85-3BC1-467E-B83C-25E47FB34538",
          "nama": "D4 Teknik Kimia Industri",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "C344F703-3E01-45AB-BB81-DDD732A95E78",
          "nama": "S1 Desain Komunikasi Visual",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "0DE1857B-9430-4E58-BF46-0ED01BEED6E2",
          "nama": "S1 Studi Pembangunan",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "F08491DF-76FD-495D-897D-1E4E4913DDDB",
          "nama": "S1 Manajemen Teknologi",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E71BF52E-3ADF-4D64-B11D-57914B55557C",
          "nama": "S2 Manajemen Teknologi",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "4F80CAD5-B0BC-49B2-9EB2-1E26FAB09221",
          "nama": "D3 Teknik Infrastruktur Sipil",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "9A072B45-AE5A-4A11-A77C-0D5E4C912093",
          "nama": "D4 Teknik Infrastruktur Sipil",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "6EB3E962-2CCE-4364-BD7D-2707FFF4541E",
          "nama": "S1 Kimia",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "3C5E04D8-645B-4676-8E38-77C90D14D651",
          "nama": "S2 Kimia",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E5A5DE7B-3938-456C-8556-CCB84C3D8086",
          "nama": "S3 Kimia",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "570BAD3F-9C28-40E1-9724-44366F8B07BF",
          "nama": "S1 Matematika",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E8AA98CC-694A-4ACB-8877-4BC7CB339A49",
          "nama": "S2 Matematika",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "877D5D4D-CF6B-4438-AB4F-561549314F1B",
          "nama": "S1 Statistika",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "AC68C439-525E-4DDC-A2A8-A58B3FDE4013",
          "nama": "S2 Statistika",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "6099BD21-E4BC-46B6-91D8-3657335C3DBB",
          "nama": "S3 Statistika",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "CED75377-14D7-4B65-AEA3-C29251941656",
          "nama": "S1 Biologi",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "DC49654E-F2EC-4509-A0FA-2F01B113138D",
          "nama": "S2 Biologi",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "F5C09CA1-A0D3-4DE1-9312-06B8E2F1EC15",
          "nama": "S1 Teknik Mesin",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "92C96059-B5A0-47DB-A355-54C1BE16A2FE",
          "nama": "S2 Teknik Mesin",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "D638DBEC-C3D4-4269-A927-CFCA842F0946",
          "nama": "S3 Teknik Mesin",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "D547E6C9-7A5F-46EA-BD3B-5CB136355AE0",
          "nama": "S1 Teknik Kimia",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "DEA778EE-D637-41FE-83BD-AA4CFBAC91ED",
          "nama": "S2 Teknik Kimia",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "820812A5-D1FF-420D-9DE8-0589FB3F3E8D",
          "nama": "S3 Teknik Kimia",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "97BC8BC8-C394-428E-8BE1-E64FF1E9ED84",
          "nama": "S1 Teknik Fisika",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "2BA63941-AE8C-44EA-A9E1-04CBE91D054E",
          "nama": "S2 Teknik Fisika",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "6A717360-6EB7-4DEC-B646-8D73B717F72D",
          "nama": "S3 Teknik Fisika",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "CF9EC621-9A54-4E79-B86D-333BF297B87A",
          "nama": "S1 Teknik Sistem dan Industri",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "DAA185FA-CF83-4082-9E41-11876353204B",
          "nama": "S2 Teknik Sistem dan Industri",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "FDE2A82C-838A-4545-8209-AECB545C6BF0",
          "nama": "S3 Teknik Sistem dan Industri",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "637470CB-CB14-4FBE-B695-311A6B5279E8",
          "nama": "S1 Teknik Material dan Metalurgi",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "AAAB5D73-A027-49BB-850A-E95CC1EF397E",
          "nama": "S2 Teknik Material dan Metalurgi",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5C5C3BBB-6C3B-45BA-9970-16D083663FD8",
          "nama": "S1 Arsitektur",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E768C6A0-6FF9-49FC-A6D1-D64CBC6C925D",
          "nama": "S2 Arsitektur",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "4481E7AA-69F2-4D75-A0AB-DAA385A84E15",
          "nama": "S3 Arsitektur",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "04992FAF-39D9-40CF-A804-42A0E28A8AD1",
          "nama": "S1 Teknik Lingkungan",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "2923CD5D-DEBC-49FC-A04B-E838B75CFA0D",
          "nama": "S2 Teknik Lingkungan",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "FF346253-95AA-434D-B129-762CF596789D",
          "nama": "S3 Teknik Lingkungan",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "0388AE6E-775A-4C9D-B79A-C74F8D0D97FA",
          "nama": "S1 Teknik Sipil",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "6977737E-FEC5-4B58-BD23-B181DA66B301",
          "nama": "S2 Teknik Sipil",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "AC3E3F07-AEBA-45BE-8D7F-AF2829888D69",
          "nama": "S3 Teknik Sipil",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "4B84FE40-77A9-4AF4-A68C-9AF8EC13B834",
          "nama": "S1 Fisika",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "D74A9EDB-F0D8-49A1-ACAE-77168E368BEC",
          "nama": "S2 Fisika",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "188F88C4-DD88-4418-A64E-FAD7AD9E750B",
          "nama": "S3 Fisika",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5A9F80D3-13E8-4E9E-BE29-7F7C4D00AF58",
          "nama": "Laboratorium Instrumentasi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "C1A44E5E-4FE0-4F25-BFE9-1A9A42CD15A8",
          "nama": "Laboratorium Material Maju",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "1AC69B81-DBD8-406B-AF5C-6C066DFCE980",
          "nama": "Laboratorium Geofisika",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "8B3AE8A0-2994-468F-B5DD-C1CEE49EE2EF",
          "nama": "Laboratorium Fisika Modern dan Gelombang",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "9182B1CC-7C51-4B89-9F3C-4D8541939BBB",
          "nama": "Laboratorium Fisika Teori dan Filsafat Alam",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "A328A146-904E-4F64-AEC3-0AF1F2C92AA7",
          "nama": "Laboratorium Fisika Medis dan Biofisika",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "2ADC4544-AF78-4D53-BC24-F99D20E3A817",
          "nama": "Laboratorium Optoelektronika dan Elektro Magnetika Terapan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "447597E2-1038-4B07-A104-FE1BB7CFDE62",
          "nama": "Laboratorium Fisika Dasar",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "B995AD71-1F69-4E1F-927B-A5193624639C",
          "nama": "Laboratorium Struktur",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "B65DAB6D-9D5B-4A3B-91B7-CF3674E4CD0F",
          "nama": "Laboratorium Beton dan Bahan Bangunan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "A9BEA133-D51F-4338-B897-C97C7BF81D5B",
          "nama": "Laboratorium Mekanika Tanah dan Batuan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "6C8C2E85-4EFA-4787-93E2-A68CE433CA01",
          "nama": "Laboratorium Perhubungan dan Bahan Konstruksi Jalan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "88D72013-BAE6-4D24-8E4E-1567D991D554",
          "nama": "Laboratorium Keairan dan Teknik Pantai",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "0ECC130E-ABB2-4862-83BF-30730EFD50A0",
          "nama": "Laboratorium Manajemen Konstruksi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "A2F99FC9-75C8-47BE-B900-1A93B793F9DF",
          "nama": "Laboratorium Remediasi Lingkungan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "6B2E487C-10AF-4640-BC62-A2F2CFB83EF9",
          "nama": "Laboratorium Manajemen Kualitas Lingkungan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5897E807-1996-40E3-877C-15182CBB7629",
          "nama": "Laboratorium Teknologi Pengolahan Air",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "DA3E494B-4AD0-4AFD-BCBF-5C9D11BFF071",
          "nama": "Laboratorium Pengelolaan Limbah Padat dan Limbah Bahan Berbahaya dan Beracun (B3)",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "0B70079D-2F8E-435E-9672-0747C0D3FA8F",
          "nama": "Laboratorium Pengendalian Pencemaran Udara dan Perubahan Iklim",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "ECA81094-EC9E-4345-846D-D997B0B9E575",
          "nama": "Laboratorium Teori, Sejarah, dan Kritik Arsitiektur",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "53B60D89-EB21-4D88-ADD9-E8465C562231",
          "nama": "Laboratorium Perumahan dan Permukiman",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "3C42DA91-C436-4289-AA91-FB4957339792",
          "nama": "Laboratorium Sains dan Teknologi Arsitektur",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "1544A8B8-A3F2-498F-BF81-A87EEFC3EC1E",
          "nama": "Laboratorium Perancangan Kota",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "C6BA15DF-0A2B-471F-9B3E-94EB79568B70",
          "nama": "Laboratorium Perancangan Arsitektur",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "9CA16D51-C7D1-4647-AC05-AB9649944934",
          "nama": "Laboratorium Metalurgi Mekanik",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "09C050B7-95B5-4E1F-AA39-EDD7BC2C7E75",
          "nama": "Laboratorium Teknologi Manufaktur",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "FF44CB16-4F44-4E15-82BC-9EC0537CD948",
          "nama": "Laboratorium Korosi dan Kegagalan Material",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "8C38FC4D-1F72-4D11-B091-B6C67EC37853",
          "nama": "Laboratorium Inovasi Material",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "1B4CA0DA-4254-4FED-9504-1975C999B38D",
          "nama": "Laboratorium Teknologi Pengolahan Mineral dan Material",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "1B92B9ED-268D-4469-A02F-01C97AD3C324",
          "nama": "Laboratorium Kimia Material",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "C456D917-EF46-45CC-8703-37DAF90B98F5",
          "nama": "Laboratorium Fisika Material",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "69343166-67C5-4AF0-A29C-20246D1CDD9A",
          "nama": "Laboratorium Sistem Manufaktur",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "B5E3F8D7-1D84-4329-9F7F-2DE5C856A7D3",
          "nama": "Laboratorium Ergonomi dan Perancangan Sistem Kerja",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "BA766F67-3F46-4D76-BB19-557F07398AB4",
          "nama": "Laboratorium Pemodelan Kuantitatif dan Analisis Kebijakan Industri",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "800808F3-951D-42D8-80F8-A8BE126F2501",
          "nama": "Laboratorium Logistics and Supply Chain Management",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "452FB4CE-1C67-486F-9258-EE867EE3AAD7",
          "nama": "Laboratorium Perancangan Sistem dan Manajemen Industri",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "6008235F-E666-4D1A-BA93-15C2AC625A9D",
          "nama": "Laboratorium Rekayasa Bahan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "17BC9B7E-9A50-424B-B149-20507C4C96C2",
          "nama": "Laboratorium Rekayasa Energi dan Pengkondisian Lingkungan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "F9E864F5-5966-45CB-B746-0E8F92503772",
          "nama": "Laboratorium Rekayasa Fotonika",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "DA0604C0-22A9-4167-856D-1129C81F441C",
          "nama": "Laboratorium Rekayasa Instrumentasi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "111E5A29-F76A-4EBA-B2F7-D469022B7472",
          "nama": "Laboratorium Vibrasi dan Akustik",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5D7A7A17-1205-4E29-8127-95A0270374EE",
          "nama": "Laboratorium Workshop Instrumentasi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "47DE5CE3-8EDD-4576-9D77-1E245AAB2AB7",
          "nama": "Laboratorium Pengukuran Fisis",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "8E0A0A66-8E37-4044-8979-CE0BF1D37A34",
          "nama": "Laboratorium Fisika Rekayasa",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "77F6B490-AA7F-4439-BE4A-3784270B94B8",
          "nama": "Laboratorium Komputasi dan Sistem Fisik Cyber",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "205823E2-3652-4B5B-9D4D-B476CDC3377F",
          "nama": "Laboratorium Biomassa dan Konversi Energi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E3F017C5-0A4C-430E-BCD6-4525905C1765",
          "nama": "Laboratorium Teknik Reaksi Kimia",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "7775FBA8-D63D-4814-BA1A-B932061EA975",
          "nama": "Laboratorium Perpindahan Panas dan Massa",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "D043B2F5-0E54-41F9-99D4-A25E57D5197C",
          "nama": "Laboratorium Perancangan dan Pengendalian Proses",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "88E39FA8-B579-423B-A17C-91173F3F9B53",
          "nama": "Laboratorium Proses Kimia",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "430DC5E8-883E-46FB-982E-76522C2A02F9",
          "nama": "Laboratorium Mekanika Fluida dan Pencampuran",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "801724CD-6225-459C-A161-6AE4DF6DF856",
          "nama": "Laboratorium Thermodinamika",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5F9348F2-7C3D-4FBA-B22F-938AD897DC8A",
          "nama": "Laboratorium Teknologi Biokimia",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "3070F198-F71A-4492-A69B-E0CEA7B54433",
          "nama": "Laboratorium Teknologi Material",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "D62EAC1F-98B3-43AA-99CB-66C8206D959D",
          "nama": "Laboratorium Pengolahan Limbah Industri",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "C6696353-26D6-430B-8498-7B65BE3315DF",
          "nama": "Laboratorium Elektrokimia dan Korosi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "137BE9FD-F9A3-46D8-99A7-9A1DFAA7387D",
          "nama": "Laboratorium Mikrobiologi Teknik",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "C139A43B-0A68-4EF7-8F27-6E2ED7B9D3EF",
          "nama": "Laboratorium Simulasi dan Komputasi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "8A26B007-FBC9-41DF-B624-0473FD5CB2B1",
          "nama": "Laboratorium Operasi Teknik Kimia",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "587AF50B-02F1-42DA-B1A9-020A7AEFC859",
          "nama": "Laboratorium Kimia Fisika",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "A351A345-3224-4247-9285-5FC174B4DE07",
          "nama": "Laboratorium Kimia Analisa dan Kimia Organik",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "2C9B4FDD-7C05-40A9-82D0-E77D88E07E06",
          "nama": "Laboratorium Teknologi Air dan Konsultasi Industri",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "67F5B7A2-1A5C-4314-97AC-C1073EAFB93E",
          "nama": "Laboratorium Mekanika Benda Padat",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "F0F16307-8D19-447B-9607-79617CB60260",
          "nama": "Laboratorium Teknik Pembakaran dan Bahan Bakar",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "43FB01E1-347C-42C8-90A3-83DCE06C6BEA",
          "nama": "Laboratorium Proses Manufaktur",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "160619E4-17BA-40CB-9700-7E874E974ECC",
          "nama": "Laboratorium Rekayasa Termal",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "34665383-008C-4EAC-8434-B7105B2AC719",
          "nama": "Laboratorium Perancangan dan Pengembangan Produk",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5B0CB29F-D542-4AA9-B78E-0D32FDE76B7C",
          "nama": "Laboratorium Otomotif",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "EEACA099-AAC7-48F7-86D4-C8C801D2564C",
          "nama": "Laboratorium Otomasi Industri",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "136D31C3-20F7-4D6A-AA39-13D52D2145A8",
          "nama": "Laboratorium Rekayasa Sistem Industri",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5B670671-5EAC-4040-825A-0B3196AD2AA0",
          "nama": "Laboratorium Metalurgi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "99C8522C-716A-45D3-990D-60B246BFD1FA",
          "nama": "Laboratorium Teknik Cor",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "21F97CEB-1747-4E2F-ABE8-073CADFB15C3",
          "nama": "Laboratorium Mekanika dan Mesin-Mesin Fluida",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "EEB8C809-CAAF-4B56-BB1C-BE2AE91D04D6",
          "nama": "Laboratorium Vibrasi dan Sistem Dinamis",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "44B2296E-EAE5-4FBB-86BF-83488CC8FAFB",
          "nama": "Laboratorium Ekologi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "FAEE25C7-4645-494C-A1E6-F57C9052F916",
          "nama": "Laboratorium Biosains dan Teknologi Tumbuhan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "7A610192-1B5B-4912-85B3-1BE495E81050",
          "nama": "Laboratorium Zoologi dan Rekayasa Hewan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E90A2922-57B2-475B-A5CC-36E940752BF1",
          "nama": "Laboratorium Mikrobiologi dan Bioteknologi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "FA69537B-31B7-4D0C-8F86-C0752295E589",
          "nama": "Laboratorium Statistika Komputasi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "42FF124E-6BE1-410F-86EB-2D9D0E576D21",
          "nama": "Laboratorium Statistika Bisnis dan Industri",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "4F1C0A04-2A03-410E-BF8A-88813102ECAA",
          "nama": "Laboratorium Statistika Ekonomi, Finansial dan Aktuaria",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "6F13E04C-EEDB-4AF5-9BDA-A39A5068B813",
          "nama": "Laboratorium Statistika Lingkungan dan Kesehatan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "B4F226EB-BEB7-4FA0-998D-3A6536AE7C4B",
          "nama": "Laboratorium Statistika Sosial dan Kependudukan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "4668FD04-B896-4EC8-8694-E80C142BAAC9",
          "nama": "Laboratorium Komputasi Matematika",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "45DEF5A2-6D78-4D08-B26C-FBDA66009D8B",
          "nama": "Laboratorium Pemodelan dan Simulasi Sistem",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "A5061705-1DBC-4BD3-97E8-90BAAA7CD1A0",
          "nama": "Laboratorium Riset Operasi dan Pengolahan Data",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "AF544C26-4D37-481F-8A30-AB9E945FC4CC",
          "nama": "Laboratorium Ilmu Komputer",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "85607A06-DECC-4F2C-BB96-7093A66B917D",
          "nama": "Laboratorium Analisis Aljabar dan Pembelajaran Matematika",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "BA2467BC-357F-471D-BA0E-0AF2A33E57AB",
          "nama": "Laboratorium Fundamental Kimia",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "7FE078D4-B1CA-4ADF-9267-564E61ADB85C",
          "nama": "Laboratorium Kimia Bahan Alam dan Sintesis",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "9D0E26BD-D21D-427A-A8AA-5C66F4E4F27E",
          "nama": "Laboratorium Geokimia Molekuler",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "655CA3C0-9AC4-4462-B078-23488969F27F",
          "nama": "Laboratorium Kimia Mikroorganisme",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "7936091C-B51E-4065-BCCE-19415C9CB9EE",
          "nama": "Laboratorium Kimia Material dan Energi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "793525D1-4493-4D39-B148-9A3ACB6B669C",
          "nama": "Laboratorium Instrumentasi dan Metode Analisis",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "69EFF49C-E680-47FA-8222-0D96A9CA5848",
          "nama": "Laboratorium Transportasi dan Geoteknik",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "47A7DBCA-4CC5-4AE5-AEF4-98DB87F9B339",
          "nama": "Laboratorium Material dan Struktur Gedung",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "4A66018D-BE26-4BB7-A6F8-3D4BD29F2C55",
          "nama": "Laboratorium Hidroteknik dan Surveying",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "B2C229D8-CF80-49A4-8746-379BE6C25627",
          "nama": "Laboratorium Manajemen Pelaksanaan Konstruksi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "F6869293-C796-48DE-8108-C1A27C2B57EB",
          "nama": "Laboratorium Komputasi Bisnis",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "C4AD21FF-143E-410F-AC24-E3E56ACE8E9F",
          "nama": "Laboratorium Pengolahan dan Pemurnian",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "C49658DC-35DB-4227-9236-AAD378204694",
          "nama": "Laboratorium Kimia Terapan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "0CB825EA-FDEA-4F34-99F0-3966818B34A4",
          "nama": "Laboratorium Elektronika Terapan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "18121B4E-3D8E-43C2-BBF3-1FF85623E17A",
          "nama": "Laboratorium Elektronika Dasar",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "547F5629-8D40-4D20-B2BF-5BAE0CD453C4",
          "nama": "Laboratorium Programable Logic Controller",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "39C458CE-57BE-4DD2-A41A-7698C3C7B249",
          "nama": "Laboratorium Cyber Physical, Otomasi, dan Robot Industri",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "2046260A-36D2-4C23-81E9-4305C689E068",
          "nama": "Laboratorium Konversi Energi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5F3E1BB5-4D38-4BAA-AC6A-64F2D2C1911C",
          "nama": "Laboratorium Manufaktur",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "9400E369-FD32-4F8A-9D45-9030C3732EB6",
          "nama": "Laboratorium Perancangan Mekanik",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "49741BF4-44E4-4676-815A-FE756D78E5F0",
          "nama": "Laboratorium Material Teknik dan Metalurgi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "C9EE649C-441E-49DD-81C1-FCA40C82A94B",
          "nama": "Laboratorium Mikrokontroler",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "CB183B96-EC9D-4081-BB84-87EF0BA3A8A8",
          "nama": "Laboratorium Kontrol dan Proteksi Daya",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "454BBABE-A0F6-4EA1-9BF0-16E44B5A9068",
          "nama": "Laboratorium Instrumentasi Industri",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5E137C21-7373-4D6A-8D5C-F410071923D0",
          "nama": "Laboratorium Bisnis Analitik",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E3F5F973-89B4-439D-8E4E-C210D443AA0C",
          "nama": "Laboratorium Rekayasa Kualitas dan Produktivitas",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "7A870078-6735-4303-B35C-DE76A734F694",
          "nama": "Laboratorium Sistem Enterprise",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E76C380D-F86F-4721-BDE5-C993DB1BE8A9",
          "nama": "Laboratorium Rekayasa Data Dan Intelegensi Bisnis",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "7EEB2450-B7B7-4F1E-AF69-9C300E54920C",
          "nama": "Laboratorium Manajemen Sistem Informasi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "8003B259-E153-4B5D-88C5-2EA8921BC1D4",
          "nama": "Laboratorium Infrastruktur dan Keamanan Teknologi Informasi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5E7541F0-5E4F-49DB-B4A8-BC55D98C87DE",
          "nama": "Laboratorium Akuisisi Data dan Diseminasi Informasi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "8E94A1CB-0A48-4277-BB5E-464F98B325D8",
          "nama": "Laboratorium Perilaku dan Lingkungan Interior",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "A4963EDF-6CFC-47D1-A6F9-07D70CA59449",
          "nama": "Laboratorium Sains Interior",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E5A13474-F53E-4BB6-AFCA-98E8AFC64502",
          "nama": "Laboratorium Estetika dan Budaya",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "2787A729-7AB4-48D8-BBA3-ED92F7C192E2",
          "nama": "Laboratorium Integrated Digital Design",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "6505EDC5-9EB4-4340-B4B4-A8DF2D890BFE",
          "nama": "Laboratorium Branding and Communication Strategy",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "374C5F29-3C86-48B5-8968-B12CAE1D071E",
          "nama": "Laboratorium Strategic Design and Management",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "AD27A63C-881A-4772-A59B-7A67AC5AAD47",
          "nama": "Laboratorium Human Centered Design",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "A44E7EE3-F215-42E8-9690-5DCD0183AEEC",
          "nama": "Laboratorium Protomodel",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "B822DCC0-C157-4234-A056-7D98F68CF601",
          "nama": "Laboratorium Digital Creative Media",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5AE71022-685D-4577-8F61-91AC77DDB36B",
          "nama": "Laboratorium Kewirausahaan dan Pengembangan Usaha Kecil Menengah",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "22931024-9737-4761-B356-3B8C32B28EF8",
          "nama": "Laboratorium Bisnis Analitik dan Strategi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "7D5C0618-8605-46F5-9012-9837ACD36F0A",
          "nama": "Laboratorium Transportasi Laut dan Logistik",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "6A420E0F-38D7-4BEA-A65B-F39B682FD07A",
          "nama": "Laboratorium Telematika Transportasi Laut",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "DCD0AA76-CECD-4DB5-BE87-C96EB3082310",
          "nama": "Laboratorium Komputasi dan Riset Operasi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "D18EFB72-538D-4EA8-87DA-910303C6787D",
          "nama": "Laboratorium Instrumentasi dan Pengolahan Sinyal Biomedika",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "01523206-BF0E-4A7F-931E-363C23D56239",
          "nama": "Laboratorium Biocybernetics",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "1464088E-7013-477C-B8D2-3859B409BD0A",
          "nama": "Laboratorium Rekayasa Perangkat Lunak",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "19DC357A-F228-4639-B858-97C800880016",
          "nama": "Laboratorium Komputasi Berbasis Jaringan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "06EF831A-DB0E-44C1-BBF1-1D48E793DE13",
          "nama": "Laboratorium Algoritma dan Pemrograman",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "EDD4E1F7-5826-4C7A-8DF0-B84D36A5DE5A",
          "nama": "Laboratorium Dasar dan Terapan Komputasi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "FB65C31B-C580-4C59-8F55-C8995E975AEF",
          "nama": "Laboratorium Manajemen Informasi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "C48734EB-72DE-45F3-8DE5-83D0EE8D6EF7",
          "nama": "Laboratorium Interaksi, Grafik, dan Seni",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "A9A2A38E-D999-47AE-B5CE-B94644805F71",
          "nama": "Laboratorium Komputasi Cerdas dan Visi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "480F4C5B-B373-4F65-866F-B68E470D4E3A",
          "nama": "Laboratorium Arsitektur dan Jaringan Komputer",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "3BBD3E29-4038-45F8-A8D4-A3D678ED3ED8",
          "nama": "Laboratorium Telematika",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "0CD6FDAA-894C-4A2F-AE76-583DF93FC612",
          "nama": "Laboratorium Pengolahan Sinyal Digital",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5B43F392-F386-4433-A612-A62D9A18721D",
          "nama": "Laboratorium Komputasi Multimedia",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "D287CB8F-C6C1-4136-8758-E0D9C1213E7B",
          "nama": "Laboratorium Konstruksi dan Kekuatan Kapal",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "F9914F46-7E77-41ED-AE46-B15A19B99002",
          "nama": "Laboratorium Teknologi Produksi dan Manajemen Perkapalan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "365A4CB1-BF69-4EFB-B15D-6A5A8E4DC24D",
          "nama": "Laboratorium Hidrodinamika",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "53825937-3D8A-4633-B040-03818C4DDCDD",
          "nama": "Laboratorium Desain Kapal",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "7535ACC2-8C7B-482E-BCA2-BD28F3AD3027",
          "nama": "Laboratorium Geofisika Eksplorasi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "818E29AB-7140-4172-9496-32009F700F0D",
          "nama": "Laboratorium Geofisika Teknik dan Lingkungan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "F825875F-2393-44C7-836A-2E6335E85066",
          "nama": "Laboratorium Petrofisika",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "D8F85512-1139-490A-AEE5-2B625E3237B2",
          "nama": "Laboratorium Geodinamika dan Lingkungan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E76CABC1-BBFD-422D-9B2D-543E11CAA148",
          "nama": "Laboratorium Geodesi dan Surveying",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "96E8E821-5988-4371-B562-1AC70500ECC3",
          "nama": "Laboratorium Geospasial",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "3DDD5B69-06FA-4BD2-9382-7600BE56B034",
          "nama": "Laboratorium Geomarin",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "F43B067A-29F4-47D2-B458-2B157B9D5FC1",
          "nama": "Laboratorium Kadaster dan Kebijakan Pertanahan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "89582B10-065D-40D9-AB36-1CE5F24407EE",
          "nama": "Laboratorium Komputasi dan Analisa Perencanaan Keruangan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "F6BB82FA-C6BD-43F9-A64A-4AC8C3804D2F",
          "nama": "Laboratorium Pengembangan dan Perancangan Perkotaan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "13A04C81-9EA3-46EE-B5F9-36F9CB63363B",
          "nama": "Laboratorium Pengembangan Wilayah, Pesisir, dan Lingkungan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "CD9038A4-206D-4B17-A6F2-4E68F18E2293",
          "nama": "Laboratorium Elektronika Cerdas",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "F34E96FA-B27A-4AD7-A5E7-C0FB5B18BBC4",
          "nama": "Laboratorium Teknik Sistem dan Cybernetic",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "C965971D-E983-4A93-8918-13961FDA13A8",
          "nama": "Laboratorium Instrumentasi Pengukuran dan Identifikasi Sistem Tenaga",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "CC9E7488-F6DE-4409-BACC-C77E4F2732F1",
          "nama": "Laboratorium Komunikasi Multimedia",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "BE67075C-37C3-4F08-9F2B-A8441BB6C472",
          "nama": "Laboratorium Simulasi Sistem Tenaga Listrik",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "F2DAE738-B817-4B42-93F9-1F8A1EBD91FF",
          "nama": "Laboratorium Tegangan Tinggi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "75D8009A-1297-47D9-922A-0D29DE4FB1A6",
          "nama": "Laboratorium Konversi Energi Listrik",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "812BB8C2-9BCA-4AC6-9C2C-3A3A020E92BA",
          "nama": "Laboratorium Mikroelektronika dan Sistem Tertanam",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "7AE9AE9B-50A6-4F10-BD34-EC8156ACBB42",
          "nama": "Laboratorium Elektronika Industri",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "9927A393-B153-4FB4-969A-F9C9E4F84667",
          "nama": "Laboratorium Teknik Pengaturan",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "C989E501-965F-43FB-92CD-35731F068EAD",
          "nama": "Laboratorium Jaringan Telekomunikasi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5C570866-E354-4B78-818A-37011A222235",
          "nama": "Laboratorium Antena dan Propagasi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "9210A30C-ED81-4F12-9661-EAE0E3DAE85A",
          "nama": "Laboratorium Otomasi dan Informatika Industri",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E4939B52-6B1A-469B-AF2E-69A9381F844D",
          "nama": "Laboratorium Struktur, Material dan Produksi Bangunan Laut",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E0D10728-ECC4-4E78-9D98-58EE469919E7",
          "nama": "Laboratorium Energi Laut",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "ACEA2912-8873-4FE1-82E9-57C749AFDFA6",
          "nama": "Laboratorium Hidrodinamika Bangunan Laut",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "8D30144B-56DA-4E74-9F18-6472617F9418",
          "nama": "Laboratorium Komputasi dan Pemodelan Numerik",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "24BEDB54-2799-4944-900C-31724EC33D25",
          "nama": "Laboratorium Perancangan dan Konstruksi Bangunan Laut",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "4F8876FB-D49C-4159-BF61-C079D1326182",
          "nama": "Laboratorium Pantai dan Lingkungan Laut",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "C714E836-C4E2-4055-A8F0-E8607D9F9C67",
          "nama": "Laboratorium Perancangan dan Manufaktur",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "404CC8FD-F36D-4D8A-803E-167058169D11",
          "nama": "Laboratorium Listrik Kapal dan Otomatisasi",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "46903EDC-07C7-4B14-9B9E-45435008405E",
          "nama": "Laboratorium Mesin Fluida dan Sistem",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "B4198CB4-4F70-4E3C-A26F-7DA625B41DE5",
          "nama": "Laboratorium Mesin Kapal",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "684E8EEA-4D39-45F0-9B3C-74FDC15D59A8",
          "nama": "Laboratorium Keandalan dan Keselamatan Sistem",
          "levelUnit": 4,
          "JenisSatKerId": 15,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E35C303B-844D-4003-BFBE-D81DCCE006F3",
          "nama": "Unit Pelaksana Teknis Medical Center ITS",
          "levelUnit": 5,
          "JenisSatKerId": 18,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "693BDA20-83D8-4365-BACD-C189970526FD",
          "nama": "Unit Pelaksana Teknis ITS Press",
          "levelUnit": 5,
          "JenisSatKerId": 18,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "9D95B87C-4367-4BBF-90F3-8784D85D3BA4",
          "nama": "Unit Pelaksana Teknis Asrama ITS",
          "levelUnit": 5,
          "JenisSatKerId": 18,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E4E36DB8-DF66-4D9E-95CC-E69420CE81CE",
          "nama": "Unit Pelaksana Teknis Bahasa dan Budaya ITS",
          "levelUnit": 5,
          "JenisSatKerId": 18,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "A4F3E9A7-EC1E-4272-8370-FCE2FB8A0653",
          "nama": "Unit Pelaksana Teknis Fasilitas Umum ITS",
          "levelUnit": 5,
          "JenisSatKerId": 18,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "B851C0B0-F238-4618-9E3D-B794249F7EA1",
          "nama": "Unit Pelaksana Teknis Fasilitas Olahraga ITS",
          "levelUnit": 5,
          "JenisSatKerId": 18,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "2FE6082F-B898-4DB0-91F6-0DB090C76FB8",
          "nama": "Perpustakaan",
          "levelUnit": 3,
          "JenisSatKerId": 19,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "F7DFEEA6-019C-4333-86D3-2FA64805E939",
          "nama": "Subdit Pengelolaan Teknologi Big Data",
          "levelUnit": 4,
          "JenisSatKerId": 22,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "9EB2E2FD-B5E9-47FF-8C6F-F8DD8A616CF8",
          "nama": "Subdit Layanan TSI dan Implementasi Teknologi Cerdas",
          "levelUnit": 4,
          "JenisSatKerId": 22,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "86FB14D3-98A3-4B7A-BDE5-C4680E364A48",
          "nama": "Subdit Pengabdian kepada Masyarakat",
          "levelUnit": 4,
          "JenisSatKerId": 22,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "58B5C252-EF49-4BBA-93D8-1F706CEB7D31",
          "nama": "Subdit Infrastruktur dan Keamanan TIK",
          "levelUnit": 4,
          "JenisSatKerId": 22,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "A920CBA2-3BD6-4EA8-9F81-6CE2433F77A3",
          "nama": "Subdit Aplikasi dan Platform Digital",
          "levelUnit": 4,
          "JenisSatKerId": 22,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "BDDCDA90-CF81-46A8-97C0-08E13E37FB86",
          "nama": "Subdit Riset dan Publikasi Ilmiah",
          "levelUnit": 4,
          "JenisSatKerId": 22,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "09ECA3DA-8D1A-47E7-B81B-F2F20825740B",
          "nama": "Subdit Pengembangan Kewirausahaan dan Karir",
          "levelUnit": 4,
          "JenisSatKerId": 22,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "DEB74A44-FA2B-4AC4-A77A-B5278267493F",
          "nama": "Subdit Pendidikan Pascasarjana dan Profesi",
          "levelUnit": 4,
          "JenisSatKerId": 22,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "65F80EC5-8F90-4057-A59F-B78275BEEC85",
          "nama": "Subdit Admisi",
          "levelUnit": 4,
          "JenisSatKerId": 22,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "9723C3EB-527D-437A-B27A-4BC6C518AA3F",
          "nama": "Subdit Koordinasi Perkuliahan Bersama",
          "levelUnit": 4,
          "JenisSatKerId": 22,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "16F5C7AC-8956-41E9-BDBD-3FFCB3D198FA",
          "nama": "Subdit Kerjasama Akademik",
          "levelUnit": 4,
          "JenisSatKerId": 22,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5FD836DD-F667-4B03-A940-53E02CFBF189",
          "nama": "Subdit Pengembangan Akademik",
          "levelUnit": 4,
          "JenisSatKerId": 22,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "73C30A3C-765E-4352-AA14-3D6FF9F5C0A3",
          "nama": "Subdit Pengembangan dan Evaluasi Organisasi",
          "levelUnit": 4,
          "JenisSatKerId": 22,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "8CDD86A7-A62E-431D-8785-D25B09D3F5B9",
          "nama": "Subdit Pengembangan dan Evaluasi SDM",
          "levelUnit": 4,
          "JenisSatKerId": 22,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "0E60CEDC-C8DF-4619-8CD5-73F44BAA0DEF",
          "nama": "Subdit Perencanaan Sarana Prasarana dan Logistik",
          "levelUnit": 4,
          "JenisSatKerId": 22,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "2A46D74D-93A4-4CF7-B893-44310A74BD66",
          "nama": "Subdit Pengawasan Implementasi Master Plan",
          "levelUnit": 4,
          "JenisSatKerId": 22,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "070D3480-AB10-435D-8B7A-C8B0FF5727CF",
          "nama": "Subdit Perencanaan Anggaran dan Evaluasi Pengembangan",
          "levelUnit": 4,
          "JenisSatKerId": 22,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E000313A-484A-497B-90E8-6B0D4196AC84",
          "nama": "Subdit Pengembangan Kemahasiswaan",
          "levelUnit": 4,
          "JenisSatKerId": 22,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5D024A01-6FDD-4785-9B68-B5E4AC521B08",
          "nama": "Seksi Pengembangan Talenta",
          "levelUnit": 5,
          "JenisSatKerId": 23,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "D3B2249A-4C73-4D31-A9ED-8DEFEF858C4A",
          "nama": "Seksi Pengembangan Karakter",
          "levelUnit": 5,
          "JenisSatKerId": 23,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5E3F4D65-4E38-4404-8333-F2B4B88AD0B1",
          "nama": "Seksi Pengembangan dan Evaluasi Kurikulum",
          "levelUnit": 5,
          "JenisSatKerId": 23,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "8B353CF5-5858-4509-86AA-52255DD91A82",
          "nama": "Seksi Lembaga Sertifikasi Profesi",
          "levelUnit": 5,
          "JenisSatKerId": 23,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "0DE7DE7B-1E01-4EF3-80A7-690A1E0D5ACD",
          "nama": "Seksi Pengelolaan Magang Industri",
          "levelUnit": 5,
          "JenisSatKerId": 23,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "229D7E33-0968-46CC-B98C-929784E0593F",
          "nama": "Seksi Bimbingan Konseling dan Kewirausahaan",
          "levelUnit": 5,
          "JenisSatKerId": 23,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5868001C-F4A2-4D30-ACF3-736C2BE8E7CF",
          "nama": "Seksi Implementasi Keintegrasian Aplikasi",
          "levelUnit": 5,
          "JenisSatKerId": 23,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "060B9D4D-8E8D-4B45-AA91-E4CE86952EAE",
          "nama": "Seksi Hubungan Pelanggan dan Perencanaan Bisnis",
          "levelUnit": 5,
          "JenisSatKerId": 23,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "A857C863-0765-4DED-9E43-518859B351A2",
          "nama": "Bagian Tata Usaha dan Keuangan DIKST",
          "levelUnit": 4,
          "JenisSatKerId": 24,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "967C903C-FD31-47F6-A6E9-48BD8221E231",
          "nama": "Bagian Tata Usaha dan Keuangan DKPU",
          "levelUnit": 4,
          "JenisSatKerId": 24,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "6128A813-483D-4F4E-B69D-CCC725420BFD",
          "nama": "Bagian Implementasi Reformasi Birokrasi",
          "levelUnit": 4,
          "JenisSatKerId": 24,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "B855BB50-1EDB-4174-B351-E9D815F95CC3",
          "nama": "Bagian Administrasi Umum dan Kearsipan Digital",
          "levelUnit": 4,
          "JenisSatKerId": 24,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "416BC22F-5F72-44CB-8D2E-366DBDEF96F8",
          "nama": "Bagian Akuntansi dan Pelaporan Keuangan",
          "levelUnit": 4,
          "JenisSatKerId": 24,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "21146B95-05CF-4625-9A30-99E39EDB57BB",
          "nama": "Bagian Tata Usaha dan Keuangan DRPM",
          "levelUnit": 4,
          "JenisSatKerId": 24,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "F4347006-94C0-4E0B-81E6-86074CDA8E1E",
          "nama": "Bagian Layanan Pendidikan",
          "levelUnit": 4,
          "JenisSatKerId": 24,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "ED3A1460-844D-4650-957F-118DD4DE2F32",
          "nama": "Bagian Logistik dan Keamanan",
          "levelUnit": 4,
          "JenisSatKerId": 24,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "69934B3A-3DC1-41CE-A768-231C2C06C463",
          "nama": "Bagian Perbendaharaan",
          "levelUnit": 4,
          "JenisSatKerId": 24,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "548BB34D-4BF6-4F99-88FE-C9172811067A",
          "nama": "Bagian Layanan Kepegawaian",
          "levelUnit": 4,
          "JenisSatKerId": 24,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "78FA0758-52AF-4E0B-88CA-40DB87A3D470",
          "nama": "Bagian Layanan Kemahasiswaan",
          "levelUnit": 4,
          "JenisSatKerId": 24,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "B5E74879-ADE0-4A1D-B0F8-10713C9A2FC4",
          "nama": "Bagian Pengelolaan Sarana Prasarana",
          "levelUnit": 4,
          "JenisSatKerId": 24,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "52B445A6-40F2-4F39-BF28-761F2487C236",
          "nama": "Bagian Tata Usaha Fakultas Sains dan Analitika Data",
          "levelUnit": 3,
          "JenisSatKerId": 24,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "3CED0F1A-0805-4D1B-A579-AF157AE2CA01",
          "nama": "Bagian Tata Usaha Fakultas Teknologi Industri dan Rekayasa Sistem",
          "levelUnit": 3,
          "JenisSatKerId": 24,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "C7DC1769-795E-40DD-A245-C27B565F91E1",
          "nama": "Bagian Tata Usaha Fakultas Teknik Sipil, Perencanaan, dan Kebumian",
          "levelUnit": 3,
          "JenisSatKerId": 24,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "CF8476EE-A822-43E8-BF3A-B37C9230DFCE",
          "nama": "Bagian Tata Usaha Fakultas Vokasi",
          "levelUnit": 3,
          "JenisSatKerId": 24,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "C6FCD220-BB9B-4B49-B7F0-34A8F68229F1",
          "nama": "Bagian Tata Usaha Fakultas Teknologi Kelautan",
          "levelUnit": 3,
          "JenisSatKerId": 24,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "8D559297-2526-45D7-8F19-7B66B35962EC",
          "nama": "Bagian Tata Usaha Fakultas Teknologi Elektro dan Informatika Cerdas",
          "levelUnit": 3,
          "JenisSatKerId": 24,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "756D3B0B-E9DF-4D58-83D6-1D6180B89F1C",
          "nama": "Bagian Tata Usaha Fakultas Desain Kreatif dan Bisnis Digital",
          "levelUnit": 3,
          "JenisSatKerId": 24,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "B2AC05B0-503F-4BBF-8221-4E84301BE069",
          "nama": "Subbagian Tata Usaha Departemen Desain Produk",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5F841A87-6537-4362-8BA6-69231DADA188",
          "nama": "Subbagian Tata Usaha Departemen Teknologi Informasi",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "BD747134-2901-4C6A-9061-667A1119AE1A",
          "nama": "Subbagian Tata Usaha Departemen Manajemen Bisnis",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "7ADC63B6-9312-4C1A-900F-79F0AAB6CAC7",
          "nama": "Subbagian Tata Usaha Departemen Desain Komunikasi Visual",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "264453A9-3EE5-4321-8F77-4A9906AB2ADD",
          "nama": "Subbagian Tata Usaha Departemen Desain Interior",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "145DE9F0-227B-4F94-A9E6-8BA004CA754A",
          "nama": "Subbagian Tata Usaha Departemen Teknik Transportasi Laut",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "57776A8B-6D4C-49B2-A519-002DE69129C3",
          "nama": "Subbagian Tata Usaha Departemen Teknik Komputer",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "112CFF6B-73B4-4566-89D8-9E3755586BFD",
          "nama": "Subbagian Tata Usaha Departemen Teknik Biomedik",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "C3F7109A-B9A8-47FF-82CE-CF294DE8DF2C",
          "nama": "Subbagian Tata Usaha Departemen Teknik Elektro",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "139F3FD8-F85C-460D-975C-7375EF339952",
          "nama": "Subbagian Tata Usaha Departemen Sistem Informasi",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "3FC9C929-7C87-421F-8849-A468D2CEF48F",
          "nama": "Subbagian Tata Usaha Departemen Teknik Informatika",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "9C400B3A-ADE5-4025-B77F-C58B7D050E43",
          "nama": "Subbagian Tata Usaha Departemen Teknik Geofisika",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "FD4AB8FB-7448-4B74-BA07-C2BB83253717",
          "nama": "Subbagian Tata Usaha Departemen Teknik Sistem Perkapalan",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "21080905-8318-43EA-BC44-42C7D0615ADE",
          "nama": "Subbagian Tata Usaha Departemen Teknik Perkapalan",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "4608893A-5079-4F5C-BF0A-93708FE5A04E",
          "nama": "Subbagian Tata Usaha Departemen Teknik Geomatika",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "410CBE45-DD4D-44CB-971A-8E498728274B",
          "nama": "Subbagian Tata Usaha Departemen Perencanaan Wilayah dan Kota",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "4997F737-8909-4503-9DAF-C76494C3338F",
          "nama": "Subbagian Tata Usaha Departemen Teknik Kelautan",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "AC33CD85-158D-497F-A49A-112A34E21003",
          "nama": "Subbagian Tata Usaha Departemen Teknik Infrastruktur Sipil",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "AB12ED88-C8A1-47A6-9B17-1DE599FA9796",
          "nama": "Subbagian Tata Usaha Departemen Manajemen Teknologi",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "BA0FA430-BF10-4304-BA60-C785245B3BF0",
          "nama": "Subbagian Tata Usaha Departemen Studi Pembangunan",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "B8589CC4-E973-4FB8-AC67-407C2405F902",
          "nama": "Subbagian Tata Usaha Departemen Teknik Elektro Otomasi",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E7F8E208-4826-40D1-B905-4971C5C535F9",
          "nama": "Subbagian Tata Usaha Departemen Teknik Mesin Industri",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "275ACECD-315A-48C2-A0C8-62F89D1D664F",
          "nama": "Subbagian Layanan dan Pengembangan",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "159BCFD1-9699-43BF-ABC8-AFF6AA737B56",
          "nama": "Subbagian Tata Usaha Departemen Statistika Bisnis",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "8FC4C30C-5DDA-4DE4-87B5-17B711BEB8B7",
          "nama": "Subbagian Tata Usaha Departemen Teknik Instrumentasi",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "752E3662-B9F0-48D6-ABC8-C5673EFE825B",
          "nama": "Subbagian Tata Usaha Departemen Teknik Kimia Industri",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "0BBB42B4-D8DB-40C5-99BD-4E39E0E7E85F",
          "nama": "Subbagian Tata Usaha Departemen Teknik Material dan Metalurgi",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "8B53CE2B-AB30-4430-A4F9-9D958B473CD2",
          "nama": "Subbagian Tata Usaha Departemen Arsitektur",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "0E248972-BBF9-4338-9E4B-408EFAE72389",
          "nama": "Subbagian Tata Usaha Departemen Teknik Sipil",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "C85AE8B4-594E-41EF-9B73-55BDEB3EAEF5",
          "nama": "Subbagian Tata Usaha Departemen Teknik Lingkungan",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "94A3E4D3-C75A-44AC-931B-6984FF263D99",
          "nama": "Subbagian Tata Usaha Departemen Teknik Sistem dan Industri",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "CFEB9E9D-5966-4AA3-AD35-F9C480A3100B",
          "nama": "Subbagian Tata Usaha Departemen Teknik Fisika",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "19404FDB-A720-4C2B-9D8D-1C1D1B67A2CA",
          "nama": "Subbagian Tata Usaha Departemen Teknik Kimia",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "AA8BA4B2-B055-4390-B295-0DD7A7B8DD9C",
          "nama": "Subbagian Tata Usaha Departemen Teknik Mesin",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "D80F2B7B-F8E8-4B26-B07B-C71A12DB1370",
          "nama": "Subbagian Tata Usaha Departemen Aktuaria",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "296D195A-A406-48BB-A0D8-202C5D6AE809",
          "nama": "Subbagian Tata Usaha Departemen Fisika",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "8B676212-87D5-4F76-8D88-995227DBB430",
          "nama": "Subbagian Tata Usaha Departemen Biologi",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "1F5CC0C5-60E3-49B4-890D-987E9CEC1F18",
          "nama": "Subbagian Tata Usaha Departemen Kimia",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E33E9CB0-1D9A-4CE5-8E73-9D21082E5F2F",
          "nama": "Subbagian Tata Usaha Departemen Statistika",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "C3E4C49D-65D5-4ADD-9E71-E32EF9AED501",
          "nama": "Subbagian Tata Usaha Departemen Matematika",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "DFCD8BD5-5CD6-4183-B0FC-67E1BA132C9F",
          "nama": "Subbagian Pemeliharaan Sarana",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "7FA8100D-C174-400D-B2EC-29DDFE1DB73E",
          "nama": "Subbagian Pemeliharaan Prasarana dan Ruang Terbuka Hijau",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "787AC7D6-6A64-4145-AFFA-07CDC9F890C8",
          "nama": "Subbagian Pengawasan Pembangunan Sarana dan Prasarana",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "A08A74E7-41F3-433A-A110-9D2F85523DCB",
          "nama": "Subbagian Layanan Data Kemahasiswaan",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "9FE4B682-C91A-40E1-AED6-DF43CDD41498",
          "nama": "Subbagian Layanan Beasiswa dan Kesejahteraan Mahasiswa",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "0B235AF1-F8A8-4ADA-99CC-D575E859E5F8",
          "nama": "Subbagian Penyusunan Anggaran",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "95650353-221E-4971-BACF-8F281715C5EE",
          "nama": "Subbagian Pengendalian Anggaran",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "FCCFE236-10E0-4C58-B7FC-369CEEEF5968",
          "nama": "Subbagian Layanan Kepegawaian Dosen",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "70C74BF9-9BDA-4529-B6F5-6C3C4133EB1D",
          "nama": "Subbagian Layanan Kepegawaian Tenaga Kependidikan",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "53639217-C96B-430D-A957-AF49C21087A9",
          "nama": "Subbagian Perbendaharaan APBN",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "D8C52B8F-2E62-4A3B-B4DF-1736008451DF",
          "nama": "Subbagian Perbendaharaan Non APBN",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "C99E5C4F-EB67-4224-99A6-DDF73302FF7C",
          "nama": "Subbagian Pemantauan dan Evaluasi Pendidikan",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "72857270-B829-4A93-B219-5F1764448629",
          "nama": "Subbagian Layanan Registrasi Data dan Pendidikan",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "F56BC937-747C-4B9F-9D88-56BCEA7D8CD8",
          "nama": "Subbagian Program Internasionalisasi",
          "levelUnit": 3,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "1DAE7529-E541-4672-BCB2-DF965C8D7030",
          "nama": "Subbagian Layanan Hukum",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "DFEADCE2-CB80-4C46-B6F2-12C433F1FA93",
          "nama": "Subbagian Administrasi Audit Internal",
          "levelUnit": 3,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "AA45C579-981D-4149-BB8F-E528094B213C",
          "nama": "Subbagian Adminstrasi Penjaminan Mutu",
          "levelUnit": 3,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "77196AEC-60C6-4793-9A83-8CA64818A749",
          "nama": "Subbagian Administrasi Sekretaris Institut",
          "levelUnit": 3,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "344990A7-081E-454E-9D97-26DF025D3C48",
          "nama": "Subbagian Humas dan Protokoler",
          "levelUnit": 4,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "47F065EA-FDD1-4C7B-A610-7FF0D2D4E97D",
          "nama": "Subbagian Perbendaharaan dan Pelaporan Keuangan DRPM",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "95635F0F-4CE5-4914-B69C-964A73FA5F19",
          "nama": "Subbagian Akuntansi dan Perpajakan",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "7CEE4FCB-31AB-455B-9747-91645455A13B",
          "nama": "Subbagian Pelaporan Keuangan",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "6F264160-2E65-441E-A2E6-EC60F48F25FB",
          "nama": "Subbagian Inventarisasi Aset",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5E80B5DB-4E61-4FD3-8CE0-5456DCA7EFE9",
          "nama": "Subbagian Tata Usaha dan Kesekretariatan",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "B41C9CC4-5BC9-4D2E-94D1-CCEA246A650D",
          "nama": "Subbagian Kearsipan dan Dokumentasi Multimedia",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E69AD9E9-BC8A-44C8-AA67-BD391D8D31F3",
          "nama": "Subbagian Pusat Layanan Terpadu",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "6F285C8E-FCB0-4BBF-828F-2C527DD2E62F",
          "nama": "Subbagian Keselamatan, Kesehatan Kerja, dan Lingkungan",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "76ABF9ED-25CA-49F9-80AA-679B368C32DD",
          "nama": "Subbagian Layanan Logistik dan Transportasi",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "6C172D1A-CEF5-47D2-8F5B-595277CC5BCD",
          "nama": "Subbagian Perbendaharaan dan Pelaporan Keuangan DKPU",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "DB1B1E1B-01B7-405B-B3D8-AEC7B1471D61",
          "nama": "Subbagian Perbendaharaan dan Pelaporan Keuangan DIKST",
          "levelUnit": 5,
          "JenisSatKerId": 25,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "BA1BE635-2222-4958-9DD7-C6E015F922FB",
          "nama": "Unit Inkubator dan Layanan Bisnis Inovatif",
          "levelUnit": 4,
          "JenisSatKerId": 26,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "4780C191-A4C6-431A-85E0-F75638F9E8F6",
          "nama": "Unit Kluster Inovasi Otomotif",
          "levelUnit": 5,
          "JenisSatKerId": 26,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "7E5E315B-7CDD-4EE8-A65C-1B3A61AC5AD3",
          "nama": "Unit Kluster TIK dan Robotika",
          "levelUnit": 5,
          "JenisSatKerId": 26,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "2224FA5E-9084-4E17-86E1-DFC7DE37EEB1",
          "nama": "Unit Kluster Industri Kreatif",
          "levelUnit": 5,
          "JenisSatKerId": 26,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "BBCFC10F-1F6A-4A8F-BA86-14390E179E7F",
          "nama": "Unit Kluster Kemaritiman",
          "levelUnit": 5,
          "JenisSatKerId": 26,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "98ABB035-7333-49EB-9D73-E2A45DE1B1B9",
          "nama": "Unit Akses Permodalan dan Kealumnian",
          "levelUnit": 4,
          "JenisSatKerId": 26,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "8C6BA397-6B3D-4B50-8EE1-0555D54AD0AE",
          "nama": "Unit Pengelola Usaha Mandiri",
          "levelUnit": 4,
          "JenisSatKerId": 26,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E8DA8F96-23F5-4082-8B8F-99CF9A355E98",
          "nama": "Unit Pengelola Kerjasama",
          "levelUnit": 4,
          "JenisSatKerId": 26,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "EB863F41-40E6-4EBE-BF0B-D30F8037E4A7",
          "nama": "ITS",
          "levelUnit": 0,
          "JenisSatKerId": 36,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "82BBB880-9005-4A2B-A3B4-9588F9BE8286",
          "nama": "Pusat Publikasi Ilmiah",
          "levelUnit": 5,
          "JenisSatKerId": 26,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "87CE4CB9-134B-4C02-B4AE-4E9D202F151D",
          "nama": "Pusat Kecerdasan Artifisial dan Teknologi Kesehatan",
          "levelUnit": 5,
          "JenisSatKerId": 33,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "89CF4FAC-CA86-4E91-9F03-5CB55F75F8CA",
          "nama": "Unit Layanan Hukum dan Pengelolaan Risiko",
          "levelUnit": 3,
          "JenisSatKerId": 26,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "48E2664E-B8C8-4CC0-A975-9169056151C3",
          "nama": "Unit Komunikasi Publik",
          "levelUnit": 3,
          "JenisSatKerId": 26,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "B02BFB98-B0FA-4461-BFF1-3C6EAACBB9EC",
          "nama": "Unit Pengelolaan Pengendalian Program",
          "levelUnit": 3,
          "JenisSatKerId": 26,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "213C623C-3CAD-49DD-ABCC-4B8513406FC0",
          "nama": "Unit Penjaminan Mutu Akademik dan Kemahasiswaan",
          "levelUnit": 3,
          "JenisSatKerId": 26,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "53F40C17-3046-42A3-BE21-498E8609071A",
          "nama": "Unit Penjaminan Mutu Penelitian dan Pengabdian pada Masyarakat",
          "levelUnit": 3,
          "JenisSatKerId": 26,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "9EFABE1F-FE20-43FF-A9D8-3100FDB48055",
          "nama": "Unit Audit Internal Keuangan dan Pengadaan",
          "levelUnit": 3,
          "JenisSatKerId": 26,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "DD49B606-823F-42F5-8D52-1CB561C5C9B5",
          "nama": "Unit Audit Internal Sarana Prasarana dan Kepegawaian",
          "levelUnit": 3,
          "JenisSatKerId": 26,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "A563A5B3-D219-4BA5-A2A7-05C769264422",
          "nama": "Unit Promosi dan Mobilitas Internasional",
          "levelUnit": 3,
          "JenisSatKerId": 26,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "850EE45A-03DF-430A-82D1-A1A2F50A316D",
          "nama": "Unit Kerjasama Internasional",
          "levelUnit": 3,
          "JenisSatKerId": 26,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "49B1D2A2-6306-4DFE-B496-75A1DA881462",
          "nama": "Unit Urusan World Class University",
          "levelUnit": 3,
          "JenisSatKerId": 26,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "FECEB23B-BC16-407B-87A4-02A28B19AE60",
          "nama": "Satuan Keamanan Kampus",
          "levelUnit": 5,
          "JenisSatKerId": 26,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "FF725DEE-20A3-4B71-971A-ED1702C469B1",
          "nama": "Unit Pengembangan Smart Eco Campus",
          "levelUnit": 3,
          "JenisSatKerId": 26,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "F3B4F3AD-D048-44B0-89AD-DDA1E11AAFAE",
          "nama": "Unit Kerja Pengadaan Barang dan Jasa",
          "levelUnit": 3,
          "JenisSatKerId": 26,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "44246A3A-EDD9-4A23-BFCC-1650052AEAC7",
          "nama": "Pendidikan Profesi Arsitektur",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "238A074B-89B2-42BB-B1AA-F44425BBDFA8",
          "nama": "Join Degree In Marine Engineering",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "F7B8DABE-AA0B-42CE-A784-B5984A81767F",
          "nama": "Studio Perancangan",
          "levelUnit": 4,
          "JenisSatKerId": 16,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "2B9951C2-D711-4E2C-ABE8-8656BBD01975",
          "nama": "Studio Gambar",
          "levelUnit": 4,
          "JenisSatKerId": 16,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E56C83D9-F05B-4AE4-8DCF-B43C7B88354E",
          "nama": "Studio Aplikasi Terapan",
          "levelUnit": 4,
          "JenisSatKerId": 16,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "A067A5D3-20BF-4F82-BF4A-5EF5C499DA43",
          "nama": "Studio Pemrograman Sistem Informasi",
          "levelUnit": 4,
          "JenisSatKerId": 16,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "B095BA6C-37A0-4B54-A4C3-F0D3E478BA11",
          "nama": "Sub unit Pengelolaan Risiko",
          "levelUnit": 4,
          "JenisSatKerId": 27,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "DE0B9538-8CFC-4422-B73D-2E86CD7E35AB",
          "nama": "Sub Unit Pengelolaan Kinerja",
          "levelUnit": 4,
          "JenisSatKerId": 27,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "56BF9DBE-5FDB-40D6-B55D-DDCE549C1B46",
          "nama": "Sub Unit Pengendalian Program",
          "levelUnit": 4,
          "JenisSatKerId": 27,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "11B4C455-231A-4E33-A4D5-0F47B4E410BD",
          "nama": "Sub Unit Promosi dan Citra Institusi",
          "levelUnit": 4,
          "JenisSatKerId": 27,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "20F57F0A-2B66-4851-910F-25440AD681EB",
          "nama": "Pusat Penelitian Material Maju dan Teknologi Nano",
          "levelUnit": 5,
          "JenisSatKerId": 33,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "704CE047-F0B7-4B76-92F7-782D738CCDCB",
          "nama": "Pusat Penelitian Internet of Things dan Teknologi Pertahanan",
          "levelUnit": 5,
          "JenisSatKerId": 33,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "71D473EF-BE53-4912-B0A6-34E607CCE24C",
          "nama": "Pusat Penelitian Agri-pangan dan Bioteknologi",
          "levelUnit": 5,
          "JenisSatKerId": 33,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "AF6C5623-A0E4-4D1D-848E-6E0680E1C6F8",
          "nama": "Pusat Penelitian Mitigasi Kebencanaan dan Perubahan Iklim",
          "levelUnit": 5,
          "JenisSatKerId": 33,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "4C12C79D-D191-46D2-B422-FB23B150D613",
          "nama": "Pusat Penelitian Sains dan Teknologi Kelautan-Kebumian",
          "levelUnit": 5,
          "JenisSatKerId": 33,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "D353726C-55FF-4B7E-8362-F76146A3A685",
          "nama": "Pusat Penelitian Sains Fundamental",
          "levelUnit": 5,
          "JenisSatKerId": 33,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "4E9F515E-0F7A-43E3-84E6-31C3030E0ED8",
          "nama": "Pusat Penelitian Infrastruktur dan Lingkungan Berkelanjutan",
          "levelUnit": 5,
          "JenisSatKerId": 33,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "2BBF9B88-D10D-4C96-BC51-245C30FF0CCD",
          "nama": "Pusat Penelitian Manufaktur, Transportasi dan Logistik",
          "levelUnit": 5,
          "JenisSatKerId": 33,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "7628DC35-30B3-4B48-AF6B-EE02B1B1192C",
          "nama": "Pusat Penelitian Energi Berkelanjutan",
          "levelUnit": 5,
          "JenisSatKerId": 33,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "CB0FE547-38E0-471C-AD24-296ABE863254",
          "nama": "Pusat Unggulan IPTEK (PUI) Sistem Kontrol Otomotif",
          "levelUnit": 5,
          "JenisSatKerId": 34,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "E1FF860C-E7AE-43C3-8EC8-D8F5ED58915D",
          "nama": "Pusat Unggulan IPTEK (PUI) Keselamatan Kapal dan Instalasi Laut",
          "levelUnit": 5,
          "JenisSatKerId": 34,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "3692CC80-83FC-41D5-84FD-3F385380D462",
          "nama": "Pusat Unggulan IPTEK (PUI) Mekatronika dan Otomasi Industri",
          "levelUnit": 5,
          "JenisSatKerId": 34,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "8881FA26-DC05-400C-B8FA-F050C0C73B66",
          "nama": "Pusat Unggulan IPTEK (PUI) Desain",
          "levelUnit": 5,
          "JenisSatKerId": 34,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "0764D603-FFBC-481B-914C-CFA55D19FA15",
          "nama": "Pusat Kajian Potensi Daerah dan Pemberdayaan Masyarakat",
          "levelUnit": 5,
          "JenisSatKerId": 35,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "FC2B9B00-AF4A-45F6-BC49-24AEAF417033",
          "nama": "Pusat Kajian Teknologi Tepat Guna",
          "levelUnit": 5,
          "JenisSatKerId": 35,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "85FD593A-5E0B-4A51-98F4-EA8161C19096",
          "nama": "Pusat Kajian Halal",
          "levelUnit": 5,
          "JenisSatKerId": 35,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "BCBCC20B-8DD1-462A-ACEF-458CD6AC65FA",
          "nama": "Pusat Kajian Sustainable Development Goals",
          "levelUnit": 5,
          "JenisSatKerId": 35,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "DECC9E1F-AE05-4BE8-AFB7-8F1EFEC28696",
          "nama": "Pusat Kajian Kebijakan Publik Bisnis dan Industri",
          "levelUnit": 5,
          "JenisSatKerId": 35,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "51845692-9914-41FA-AEF1-320841DD2849",
          "nama": "S3 Matematika",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "83E4C3F2-3A4C-4EBE-88D2-D6A66307EC22",
          "nama": "Program Profesi Insinyur (Lama)",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "26E35DE6-9023-4033-A9F6-B66901037C61",
          "nama": "D3 T. Permesinan kapal",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "B66AA19E-5F07-4FA8-857A-0A03010016D4",
          "nama": "D3 T. Kelistrikan kapal",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "CDA961EA-456A-441A-9BAC-3D0468736280",
          "nama": "D4 T. K3",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "FCA2854B-2F38-42FE-A9D7-5EC6960FEE94",
          "nama": "D3 T. Elektronika",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "B074DCAA-DA49-4F1D-B058-CB449542E044",
          "nama": "D4 T. Elektronika",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "540F5C43-407A-42A2-96F1-840EDAD4BD46",
          "nama": "D3 T. Telekomunikasi",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "3B446795-5E91-4187-9AD5-306C793DBCBC",
          "nama": "D4 T. Telekomunikasi",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "108F3BC1-EA43-4E5A-9E1F-80E098FB492D",
          "nama": "D3 T. Elektro Industri",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "BF4937DC-AD9F-488A-B522-99233B938946",
          "nama": "D4 T. Elektro Industri",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "AB3FF778-5900-4995-946D-B062645D0C00",
          "nama": "D3 Teknik Informatika",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "5AB568F3-6BB4-4152-B770-A3EBB7DE37ED",
          "nama": "D4 Teknik Informatika",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "6A00D521-3828-4969-BB2D-AF0B400788D8",
          "nama": "D3 T. Bangunan kapal",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "4DB592ED-96F4-4785-808E-E6D5D2B8A323",
          "nama": "Program Profesi Insinyur",
          "levelUnit": 5,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "9C6348A2-50D6-4118-A406-6592DBB9BB6C",
          "nama": "Unit Pengelolaan Mata Kuliah Umum",
          "levelUnit": 4,
          "JenisSatKerId": 21,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "3084FB78-84F6-4047-85DB-114C0C83EA15",
          "nama": "D4 Teknik Lingkungan",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        },
        {
          "id": "97DC7139-E557-43B7-9CE4-C32B5CFF58E7",
          "nama": "D3 T. Perancangan dan Konstruksi Kapal",
          "levelUnit": 4,
          "JenisSatKerId": 14,
          "createDate": new Date(),
          "lastUpdate": new Date()
        }
      ], {}).then(() => {
      return queryInterface.sequelize.query("SELECT id FROM [dbo].[SatuanKerjas]", ).then(async (rows) => {
        const ids = rows[0];

        for (let index = 0; index < ids.length; index++) {
          await queryInterface.bulkUpdate('SatuanKerjas', {
            IndukSatKerId: IndukSatkerId[index].IndukSatKerId
          }, {
            id: ids[index].id
          }, {}, )
        }

      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkUpdate('SatuanKerjas', {JenisSatKerId: null},{}).then(() =>
      queryInterface.bulkDelete('SatuanKerjas', null, {})
    )
  }
};