<template>
    <div class="vue-template">
        <form novalidate v-on:submit.prevent="submit">
            <h3 class="text-center">Forgot Password</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" v-model="email" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Resend Password</button>

            <div class="social-icons">
                <ul>
                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>

        </form>
    </div>
</template>
