<section class="section-1" id="section1">
    <?php get_header(); ?>
    <video class="video" autoplay loop>
        <source src="<?php echo get_template_directory_uri(); ?>/assets/videos/section1_bg_video.mp4" type="video/mp4">
    </video>

    <div class="section-1-content">
        <button type="button" class="tag-button"> Tag Title </button>
        <div>
            <h1 class="section1-animation">
                Section 1 <span class="animatedText"></span>
                <!-- <div class="message">
                <div class="word1">Alpha</div>
                <div class="word2">Bravo</div>
                <div class="word3">Charlie</div>
                <div class="word1">Delta</div>
                <div class="word2">Echo</div>
                <div class="word3">Foxtrot</div>
            </div> -->
            </h1>
            <p>
                <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. Cras tortor nibh, vestibulum id elit at,
                eleifend condimentum mi. Nunc suscipit ullamcorper dolor, et suscipit leo consequat nec. Sed sit amet
                neque sollicitudin, semper urna et, rutrum massa. Suspendisse nec euismod ex. Pellentesque nunc metus,
                rhoncus sed scelerisque ut, porta non eros.
            </p>
            <div class="section1-buttons-flex">
                <div class="button active">Button 1
                    <!-- <img style="display: inline-block; vertical-align:middle" src="<?php echo get_template_directory_uri(); ?>/assets/icons/Union.png" alt="union-png" /> -->
                </div>
                <div class="button">
                    <a href="#section2" style="text-decoration: none; color: white;"> Button 2</a>
                    <!-- <img style="display: inline-block; vertical-align:middle" src="<?php echo get_template_directory_uri(); ?>/assets/icons/Forward.png" alt="forward-png" /> -->
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section-2" id="section2">
    <div class="section-2-top">
        <h3 style="color: #00F3FF; font-size: 16px;">Filtering Section</h3>
        <h1>Section 2 </h1>
        <p><b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. Cras tortor nibh, vestibulum id elit at,
            eleifend
            condimentum mi. </p>
    </div>
    <!-- Filter code begins here -->
    <div class="filter-parent">
        <select class="select">
            <option value="none"> Select what to filter </option>
            <option value="green"> Green</option>
            <option value="blue"> Blue </option>
            <option value="black"> Black </option>
        </select>
        <div class="main-colors">
            <ul class="colors">
                <li id="green"><input class="colorCheckbox" type="checkbox" value="green1" name="Green 1" />Green 1</li>
                <li id="green"><input class="colorCheckbox" type="checkbox" value="green2"  name="Green 2" />Green 2</li>
                <li id="blue"><input class="colorCheckbox" type="checkbox" value="blue1"  name="Blue 1" />Blue 1</li>
                <li id="blue"><input class="colorCheckbox" type="checkbox" value="blue2"  name="Blue 2" />Blue 2</li>
                <li id="black"><input class="colorCheckbox" type="checkbox" value="black1"  name="Black 1" />Black 1</li>
                <li id="black"><input class="colorCheckbox" type="checkbox" value="black2"  name="Black 2" />Black 2</li>
            </ul>
        </div>
    </div>
    <!-- Carousel code begins here -->
    <div class="carousel">
        <div class="carousel-container">
            <img class="carousel-item item-1"
                src="<?php echo get_template_directory_uri(); ?>/assets/images/IMG_1_Black.jpg" alt="Black1-png"
                value="black1" data-index="1" />
            <img class="carousel-item item-2"
                src="<?php echo get_template_directory_uri(); ?>/assets/images/IMG_2_Blue.jpg" alt="Blue1"
                value="blue1" data-index="2" />
            <img class="carousel-item item-3"
                src="<?php echo get_template_directory_uri(); ?>/assets/images/IMG_3_Black.jpg" alt="Black2"
                value="black2" data-index="3" />
            <img class="carousel-item item-4"
                src="<?php echo get_template_directory_uri(); ?>/assets/images/IMG_4_Blue.jpg" alt="Blue2"
                value="blue2" data-index="4" />
            <img class="carousel-item item-5"
                src="<?php echo get_template_directory_uri(); ?>/assets/images/IMG_5_Green.jpg" alt="Green1"
                value="green1" data-index="5" />
            <img class="carousel-item item-6"
                src="<?php echo get_template_directory_uri(); ?>/assets/images/IMG_6_Green.jpg" alt="Green2"
                value="green2" data-index="6" />
        </div>
        <div class="carousel-controls">
            <img class="carousel-controls-previous"
                src="<?php echo get_template_directory_uri(); ?>/assets/icons/carousel_left_arrow.svg"
                alt="leftArrow" />
            <div class="carousel-dots">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/Selected_dot.svg" alt="dot" />
                <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/Unselected_dot.svg" alt="dot" />
                <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/Unselected_dot.svg" alt="dot" />
                <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/Unselected_dot.svg" alt="dot" />
                <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/Unselected_dot.svg" alt="dot" />
                <div>
                    <img class="carousel-controls-next"
                        src="<?php echo get_template_directory_uri(); ?>/assets/icons/carousel_right_arrow.svg"
                        alt="rightArrow" />

                </div>
            </div>
</section>
<?php get_footer(); ?>