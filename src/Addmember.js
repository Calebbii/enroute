function Settings() {
    return (
        <div className="settings-container">
            <nav class="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
                <div class="container-fluid px-0">
                <div class="d-flex justify-content-between w-100" id="navbarSupportedContent">
                    <div class="d-flex align-items-center">
                        <form class="navbar-search form-inline" id="navbar-search-main">
                            <div class="input-group input-group-merge search-bar">
                            <span class="input-group-text" id="topbar-addon">
                                <svg class="icon icon-xs" x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                </svg>
                            </span>
                            <input type="text" class="form-control" id="topbarInputIconLeft" placeholder="Search" aria-label="Search" aria-describedby="topbar-addon" />
                            </div>
                        </form>
                    </div>
                    <ul class="navbar-nav align-items-center">
                        <li class="nav-item dropdown">
                            <a class="nav-link text-dark notification-bell unread dropdown-toggle" data-unread-notifications="true" href="#" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                            <svg class="icon icon-sm text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                            </svg>
                            </a>
                            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-center mt-2 py-0">














                            
                            </div>
                        </li>
                        <li class="nav-item dropdown ms-lg-3">
                            <a class="nav-link dropdown-toggle pt-1 px-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div class="media d-flex align-items-center">
                                <img class="avatar rounded-circle" alt="Image placeholder" src="assets/img/profile-picture-3.jpg" />
                                <div class="media-body ms-2 text-dark align-items-center d-none d-lg-block"><span class="mb-0 font-small fw-bold text-gray-900">Bonnie Green</span></div>
                            </div>
                            </a>
                            <div class="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1">
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <svg class="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
                                </svg>
                                My Profile 
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <svg class="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                                </svg>
                                Settings 
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <svg class="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path>
                                </svg>
                                Messages 
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <svg class="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path>
                                </svg>
                                Support
                            </a>
                            <div role="separator" class="dropdown-divider my-1"></div>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <svg class="dropdown-icon text-danger me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                </svg>
                                Logout
                            </a>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>










            




            <div class="row">
                <div class="col-12 col-xl-8">
                <div class="card card-body border-0 shadow mb-4">
                    <h2 class="h5 mb-4">General information</h2>
                    <form>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                            <div><label for="first_name">First Name</label> <input class="form-control" id="first_name" type="text" placeholder="Enter your first name" required /></div>
                            </div>
                            <div class="col-md-6 mb-3">
                            <div><label for="last_name">Last Name</label> <input class="form-control" id="last_name" type="text" placeholder="Also your last name" required /></div>
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-md-6 mb-3">
                            <label for="birthday">Birthday</label>
                            <div class="input-group">
                                <span class="input-group-text">
                                    <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <input data-datepicker="" class="form-control" id="birthday" type="text" placeholder="dd/mm/yyyy" required />
                            </div>
                            </div>
                            <div class="col-md-6 mb-3">
                            <label for="gender">Gender</label> 
                            <select class="form-select mb-0" id="gender" aria-label="Gender select example">
                                <option selected="selected">Gender</option>
                                <option value="1">Female</option>
                                <option value="2">Male</option>
                            </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                            <div class="form-group"><label for="email">Email</label> <input class="form-control" id="email" type="email" placeholder="name@company.com" required /></div>
                            </div>
                            <div class="col-md-6 mb-3">
                            <div class="form-group"><label for="phone">Phone</label> <input class="form-control" id="phone" type="number" placeholder="+12-345 678 910" required /></div>
                            </div>
                        </div>
                        <h2 class="h5 my-4">Location</h2>
                        <div class="row">
                            <div class="col-sm-9 mb-3">
                            <div class="form-group"><label for="address">Address</label> <input class="form-control" id="address" type="text" placeholder="Enter your home address" required /></div>
                            </div>
                            <div class="col-sm-3 mb-3">
                            <div class="form-group"><label for="number">Number</label> <input class="form-control" id="number" type="number" placeholder="No." required /></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4 mb-3">
                            <div class="form-group"><label for="city">City</label> <input class="form-control" id="city" type="text" placeholder="City" required /></div>
                            </div>
                            <div class="col-sm-4 mb-3">
                            <label for="state">State</label> 
                            <select class="form-select w-100 mb-0" id="state" name="state" aria-label="State select example">
                                <option selected="selected">State</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                            </div>
                            <div class="col-sm-4">
                            <div class="form-group"><label for="zip">ZIP</label> <input class="form-control" id="zip" type="tel" placeholder="ZIP" required /></div>
                            </div>
                        </div>
                        <div class="mt-3"><button class="btn btn-gray-800 mt-2 animate-up-2" type="submit">Save all</button></div>
                    </form>
                </div>
                <div class="card card-body border-0 shadow mb-4 mb-xl-0">
                    <h2 class="h5 mb-4">Alerts & Notifications</h2>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex align-items-center justify-content-between px-0 border-bottom">
                            <div>
                            <h3 class="h6 mb-1">Company News</h3>
                            <p class="small pe-4">Get Rocket news, announcements, and product updates</p>
                            </div>
                            <div>
                            <div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="user-notification-1" /> <label class="form-check-label" for="user-notification-1"></label></div>
                            </div>
                        </li>
                        <li class="list-group-item d-flex align-items-center justify-content-between px-0 border-bottom">
                            <div>
                            <h3 class="h6 mb-1">Account Activity</h3>
                            <p class="small pe-4">Get important notifications about you or activity you've missed</p>
                            </div>
                            <div>
                            <div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="user-notification-2" checked="checked" /> <label class="form-check-label" for="user-notification-2"></label></div>
                            </div>
                        </li>
                        <li class="list-group-item d-flex align-items-center justify-content-between px-0">
                            <div>
                            <h3 class="h6 mb-1">Meetups Near You</h3>
                            <p class="small pe-4">Get an email when a Dribbble Meetup is posted close to my location</p>
                            </div>
                            <div>
                            <div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="user-notification-3" checked="checked" /> <label class="form-check-label" for="user-notification-3"></label></div>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
                <div class="col-12 col-xl-4">
                <div class="row">
                    <div class="col-12 mb-4">
                        <div class="card shadow border-0 text-center p-0">
                            <div class="profile-cover rounded-top" data-background="assets/img/profile-cover.jpg"></div>
                            <div class="card-body pb-5">
                            <img src="assets/img/profile-picture-1.jpg" class="avatar-xl rounded-circle mx-auto mt-n7 mb-4" alt="Neil Portrait" />
                            <h4 class="h3">Jassa</h4>
                            <h5 class="fw-normal">Senior Software Engineer</h5>
                            <p class="text-gray mb-4">Ludhiana, Punjab</p>
                            <a class="btn btn-sm btn-gray-800 d-inline-flex align-items-center me-2" href="#">
                                <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                                </svg>
                                Connect 
                            </a>
                            <a class="btn btn-sm btn-secondary" href="#">Send Message</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="card card-body border-0 shadow mb-4">
                            <h2 class="h5 mb-4">Select profile photo</h2>
                            <div class="d-flex align-items-center">
                            <div class="me-3"> <img class="rounded avatar-xl" src="assets/img/profile-picture-3.jpg" alt="change avatar" /></div>
                            <div class="file-field">
                                <div class="d-flex justify-content-xl-center ms-xl-3">
                                    <div class="d-flex">
                                        <svg class="icon text-gray-500 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path>
                                        </svg>
                                        <input type="file" />
                                        <div class="d-md-block text-left">
                                        <div class="fw-normal text-dark mb-1">Choose Image</div>
                                        <div class="text-gray small">JPG, GIF or PNG. Max size of 800K</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="card card-body border-0 shadow">
                            <h2 class="h5 mb-4">Select cover photo</h2>
                            <div class="d-flex align-items-center">
                            <div class="me-3"> <img class="rounded avatar-xl" src="assets/img/profile-cover.jpg" alt="change cover" /></div>
                            <div class="file-field">
                                <div class="d-flex justify-content-xl-center ms-xl-3">
                                    <div class="d-flex">
                                        <svg class="icon text-gray-500 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path>
                                        </svg>
                                        <input type="file" />
                                        <div class="d-md-block text-left">
                                        <div class="fw-normal text-dark mb-1">Choose Image</div>
                                        <div class="text-gray small">JPG, GIF or PNG. Max size of 800K</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
           
        </div>
   );
}

export default Settings;