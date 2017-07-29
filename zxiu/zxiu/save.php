<?php
	$data = array(
		array(
			'url' => '../images/glass.png',
			'title' => '阿尼玛眼镜',
            'title1' => '买一送一',
			'price'=>'￥10000',
			'discountprice'=>'￥2000',
			'discount'=>'1折',
		),
		array(
			'url' => '../images/glass1.png',
            			'title' => '阿尼玛眼镜',
            			'title1' => '买一送一',
            			'price'=>'￥65464',
            			'discountprice'=>'￥654564',
            			'discount'=>'2折',
		),
		array(
			'url' => '../images/save1.png',
            			'title' => '阿尼玛眼镜',
                        'title1' => '买一送一',
            			'price'=>'￥7894564',
            			'discountprice'=>'￥0451',
            			'discount'=>'3折',
		),
		array(
			'url' => '../images/save2.png',
            			'title' => '阿尼玛眼镜',
                        'title1' => '买一送一',
            			'price'=>'￥0',
            			'discountprice'=>'￥28880',
            			'discount'=>'4折',
		),
	);
	echo json_encode($data);