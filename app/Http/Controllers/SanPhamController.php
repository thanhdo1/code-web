<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
class SanPhamController extends Controller
{
    public function getList(){
    	
    	return Product::all();
    }
}
