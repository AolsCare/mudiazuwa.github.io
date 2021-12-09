document.getElementById("button_file").addEventListener("click", button);
async function button(){
alert("file")
await window.showOpenFilePicker()
}
export default async (options = [{}]) => {
  if (!Array.isArray(options)) {
    options = [options];
  }
  options[0].recursive = options[0].recursive || false;
  return new Promise((resolve, reject) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.webkitdirectory = true;

    const _reject = () => cleanupListenersAndMaybeReject(reject);
    const _resolve = (value) => {
      if (typeof cleanupListenersAndMaybeReject === 'function') {
        cleanupListenersAndMaybeReject();
      }
      resolve(value);
    };
    // ToDo: Remove this workaround once
    // https://github.com/whatwg/html/issues/6376 is specified and supported.
    const cleanupListenersAndMaybeReject =
      options[0].legacySetup &&
      options[0].legacySetup(_resolve, _reject, input);

    input.addEventListener('change', () => {
      let files = Array.from(input.files);
      if (!options[0].recursive) {
        files = files.filter((file) => {
          return file.webkitRelativePath.split('/').length === 2;
        });
      } else if (options[0].recursive && options[0].skipDirectory) {
        files = files.filter((file) => {
          const directoriesName = file.webkitRelativePath.split('/');
          return directoriesName.every(
            (directoryName) =>
              !options[0].skipDirectory({
                name: directoryName,
                kind: 'directory',
              })
          );
        });
      }

      _resolve(files);
    });

    input.click();
  });
};
