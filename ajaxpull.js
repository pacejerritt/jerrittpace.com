var req = new XMLHttpRequest();
req.open('GET', 'video.mp4', true);
req.responseType = 'blob';

req.onload = function() {
   // Onload is triggered even on 404
   // so we need to check the status code
   if (this.status === 200) {
      var videoBlob = this.response;
      var vid = URL.createObjectURL(videoBlob); // IE10+
      // Video is now downloaded
      // and we can set it as source on the video element
      video.src = vid;
   }
}
req.onerror = function() {
   // Error
}

req.send();