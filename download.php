$filename = 'https://ajaxcloud.github.io/wp4839601-honkai-impact-3-android-wallpapers.jpg'; // of course find the exact filename....        
header('Pragma: public');
header('Expires: 0');
header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
header('Cache-Control: private', false); // required for certain browsers 
header('Content-Type: image/jpg');

header('Content-Disposition: attachment; filename="'. basename(https://ajaxcloud.github.io/wp4839601-honkai-impact-3-android-wallpapers.jpg) . '";');
header('Content-Transfer-Encoding: binary');
header('Content-Length: ' . filesize(https://ajaxcloud.github.io/wp4839601-honkai-impact-3-android-wallpapers.jpg));

readfile(https://ajaxcloud.github.io/wp4839601-honkai-impact-3-android-wallpapers.jpg);

exit; 
