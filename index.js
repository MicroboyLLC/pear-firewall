function downloadFile(fileUrl, fileName) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", fileUrl, true);
  xhr.responseType = "arraybuffer";

  xhr.onload = function() {
    var file = new File(xhr.response, fileName);
    var downloadLink = document.createElement("a");
    downloadLink.href = window.URL.createObjectURL(file);
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
  };

  xhr.send();
}
downloadFile("PearFirewall.cpython-310.pyc", "PearFirewall.cpython-310.pyc")
