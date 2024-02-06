<script type="text/javascript">

    function cart(item_hash)
    {
        var cnt=1;
        if($("#cnt").val()>0) cnt=$("#cnt").val();
        $.ajax({
            type: "POST",
            url: "/modules/catalog/cart/cart<?if($_SESSION["login_id"]<1) echo "_na";?>_handle.php",
            data: "phash="+item_hash+"&lid=<?echo $langId;?>"+"&lcode=<?echo $langCode;?>"+"&cnt="+cnt,
            success: function(msg) {
                $("#cart_cnt").html(msg);
            }
        });

        $.ajax({
            type: "POST",
            url: "/modules/shop/getitemdata.php",
            data: "itemhash="+item_hash+"&lid=<?echo $langId;?>"+"&lcode=<?echo $langCode;?>",
            success: function(msg) {
//                $("#itemdatali").html(msg);
//                $(".popup-body").html(msg);
                $(".item-popup-wrapper .popup-body").html(msg); <? /*objazatelnij selektor vperedi - > div class="popup-wrapper item-popup-wrapper" */ ?>
                showPopUp('#added_to_cart',645);
            }
        });
//        $("#spisok_frame").show();
//        $("body").addClass("overflow-hidden");
    }

    function wishlist(item_hash,id)
    {
        $.ajax({
            type: "POST",
            url: "/modules/catalog/ajax_wishlist.php",
            data: "phash="+item_hash+"&lid="+<?=$langId?>,
            success: function(msg) {
                $("#wish_cnt").html(msg);

                $("#"+id).addClass("active");
                $("#"+id).attr("href","/<?=$langCode;?>/<?=$wishSectionCode;?>");
                $(".item-opened-wish-btn").html("<? getWord("View in wishlist")?>"); /*special for wish button in opened item */
            },
            error : function (msg) {
                console.log("wishError");
            }
        });

    }

    $(document).ready(function () {
        $(".add-to-cart-more").click(function (e) {
            e.preventDefault();
            $("#spisok_frame").hide();
            $("body").css("overflow", "visible");
        });
        $(".order_close_btn").click(function (e) {
            e.preventDefault();
            $("#spisok_frame").hide();
            $("body").removeClass("overflow-hidden");
        })

    })
</script>