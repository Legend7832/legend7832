class BackgroundUploader {
  constructor() {
    this.openFile = this.openFile.bind(this);
  }

  openFile() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.jpg, .png, .jpeg, .gif';

    input.onchange = function(event) {
      var file = event.target.files[0];

      var reader = new FileReader();
      reader.onload = function() {
        document.body.style.background = 'url(' + reader.result + ') no-repeat center center fixed';
        document.body.style.backgroundSize = 'cover';
      };

      reader.readAsDataURL(file);
    };

    input.click();
  }
}

export { BackgroundUploader };