# Protobuf Decoder

[![CircleCI](https://circleci.com/gh/pawitp/protobuf-decoder.svg?style=svg)](https://circleci.com/gh/pawitp/protobuf-decoder)
[![codecov](https://codecov.io/gh/pawitp/protobuf-decoder/branch/master/graph/badge.svg)](https://codecov.io/gh/pawitp/protobuf-decoder)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)

Protobuf Decoder is a web application based on React to decode and visualize Protobuf data (hex) into prettified table layout.

> For live version, please visit: https://protobuf-decoder.netlify.com/

## Getting Started

To start application locally, use [Yarn](https://yarnpkg.com) to get the dependencies and start the application.

```
$ yarn install
$ yarn start
```

Once the application started, open http://localhost:3000 on web browser.

## Usage

Paste Protobuf data in hex format, then press **Decode** button.
<img src="https://raw.githubusercontent.com/pugkung/protobuf-decoder/master/screenshot.jpg" alt="screenshot" width="500"/>

## Example Data

**Input**

> 0a 2f 0a 08 4a 6f 68 6e 20 44 6f 65 10 01 1a 10 6a 6f 68 6e 40 65 78 61 6d 70 6c 65 2e 63 6f 6d 22 0f 0a 0b 31 31 31 2d 32 32 32 2d 33 33 33 10 01 0a 1e 0a 08 4a 61 6e 65 20 44 6f 65 10 02 1a 10 6a 61 6e 65 40 65 78 61 6d 70 6c 65 2e 63 6f 6d

**Output**

<table>
<tr><th>Field Number</th><th>Type</th><th>Content</th></tr>
<tr><td>1</td><td>string</td><td><table>
     <tr><th>Field Number</th><th>Type</th><th>Content</th></tr>
     <tr><td>1</td><td>string</td><td>John Doe</td></tr>
     <tr><td>2</td><td>varint</td><td>1</td></tr>
     <tr><td>3</td><td>string</td><td>john@example.com</td></tr>
     <tr><td>4</td><td>string</td><td><table>
         <tr><th>Field Number</th><th>Type</th><th>Content</th></tr>
         <tr><td>1</td><td>string</td><td>111-222-333</td></tr>
         <tr><td>2</td><td>varint</td><td>1</td></tr>
         </table></td></tr>
    </table></td></tr>
<tr><td>1</td><td>string</td><td><table>
     <tr><th>Field Number</th><th>Type</th><th>Content</th></tr>
     <tr><td>1</td><td>string</td><td>Jane Doe</td></tr>
     <tr><td>2</td><td>varint</td><td>2</td></tr>
     <tr><td>3</td><td>string</td><td>jane@example.com</td></tr>
</table>
