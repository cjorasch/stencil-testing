
Chunks
- Imports that are only used in a single component are inlined into that component source.  This provides a nice zero overhead approach for simple dependencies without the need to load other files.
- Imports that are used by more than one component are split out into a separate chunk file.  The components then have a dependency on that chunk which gets loaded prior to the component finishing loading.
- Both ES5 and ES6 use the same approach (but different versions of the generated files).
- If the same 5 files that are imported into 2 components then all 5 files will be placed in the same chunk and each component will import that chunk.

Loading
- Chunks are loaded before the component file is executed so no need to wait until loaded

Pruning
- Unused exports do not get included.  For example, if a source file contains 5 exported functions and only 2 are used in a component then only the 2 functions will be included in the output.
- If an interface is imported from a global file that also includes a class, then no code is imported.  If there is code that runs in the file (e.g. console.log) then that code will be imported.

Output
- `www/build/app/{bundleId}.js` - ES6 code
- `www/build/app/{bundleId}.es5.js` - ES5 code
- `www/build/app/chunk{chunkId}.js` - ES6 shared code
- `www/build/app/chunk{chunkId}.es5.js` - ES5 shared code

ES5
- ES5 code is generated when doing a production build.

Issues
- chunks should use hash naming and be immutable (filed issue)
- circular refs do not get flagged as errors (filed issue)
- async/await still gets lots of duplicate code
- how to import socket.io client
- ability to read from shared directory outside of src
- import of shared code must use individual files vs. index files

TODO:
- how to avoid very large number of chunk permutations?
