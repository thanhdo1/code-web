<?php

namespace App\Http\Controllers;
use App\Slide;
use App\Product;
use App\ProductType;
use Illuminate\Http\Request;
use App\User;
use Hash;
use Auth;
class PageController extends Controller
{
    public function getIndex(){    	
    	return Product::where('new',1)->paginate(8);
    }
   
}
