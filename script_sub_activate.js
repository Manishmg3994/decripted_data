<script>
   $(document).ready(function () {
    $(document).on('click', '#sub_activate', function () {
      $.ajax({
        type: 'post',
        url: '/validate',
        success: function (data) {
          // Your code here.
          window.location.href = '/';
        },
        error: function (error) {
          // Handle the error.
          window.location.href = '/';
        }
      });
    });
  });
</script>
