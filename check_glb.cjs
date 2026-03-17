const fs = require('fs');
const buffer = fs.readFileSync('public/tracks.glb');
// GLB format:
// 4 bytes: magic 'glTF'
// 4 bytes: version
// 4 bytes: length
// Chunk 0:
// 4 bytes: chunkLength
// 4 bytes: chunkType 'JSON'
// chunkData

const magic = buffer.toString('utf8', 0, 4);
if (magic === 'glTF') {
  const chunkLength = buffer.readUInt32LE(12);
  const chunkType = buffer.toString('utf8', 16, 20);
  if (chunkType === 'JSON') {
    const jsonStr = buffer.toString('utf8', 20, 20 + chunkLength);
    const json = JSON.parse(jsonStr);
    const names = json.nodes.map(n => n.name).filter(n => n);
    console.log(names);
  }
}
