import "./Hello.css";
const Hello = () => {
  return (
    <div className="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
            <p class="center">Free</p>
              <h2 class="card-title font-weight-bold">$0/month</h2>
              <hr />
              <p class="card-text">
              <ul class="list-unstyled my-4 text-small text-left">
                <li class="mb-2">
                  <i class="fa fa-check mr-2 text-small"></i>  Single user</li>
                <li class="mb-2">
                <i class="fa fa-check mr-2 text-small"></i>   50GB Storage</li>
                <li class="mb-2">
                <i class="fa fa-check mr-2 text-small"></i>   unlimited Public Projects</li>
                <li class="mb-2">
                <i class="fa fa-check mr-2 text-small"></i>   Community Access</li>
                <li class="mb-2">
                <i class="fa fa-check mr-2 text-small"></i>Unlimited Private Projects</li>
                <li class="mb-2" id="times">
                <i class="fa fa-times mr-2 text-small"></i>   Dedicated Phone Suport</li>
                <li class="mb-2" id="times">
                <i class="fa fa-times  mr-2 text-small" isExcluded></i>   Free Subdomain</li>
                <li class="mb-2" id="times">
                <i class="fa fa-times mr-2 text-small"></i>    Monthly Status Reports</li>
                </ul>
                
              </p>
              <a href="#" id="button" class="btn btn-primary">
                Button
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
            <p class="center">Plus</p>
              <h2 class="card-title font-weight-bold">$9/month</h2>
              <hr />
              <p class="card-text">
                <ul class="list-unstyled my-4 text-small text-left">
                <li class="mb-2">
                  <i class="fa fa-check mr-2 text-small"></i>  5 users</li>
                <li class="mb-2">
                <i class="fa fa-check mr-2 text-small"></i>   50GB Storage</li>
                <li class="mb-2">
                <i class="fa fa-check mr-2 text-small"></i>   unlimited Public Projects</li>
                <li class="mb-2">
                <i class="fa fa-check mr-2 text-small"></i>   Community Access</li>
                <li class="mb-2">
                <i class="fa fa-check mr-2 text-small"></i>Unlimited Private Projects</li>
                <li class="mb-2">
                <i class="fa fa-check mr-2 text-small"></i>   Dedicated Phone Suport</li>
                <li class="mb-2">
                <i class="fa fa-check mr-2 text-small"></i>   Free Subdomain</li>
                <li class="mb-2" id="times">
                <i class="fa fa-times mr-2 text-small"></i>    Monthly Status Reports</li>
                </ul>
              </p>
              <a href="#" id="button" class="btn btn-primary" isExcluded>
                Button
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <p class="center">Pro</p>
              <h2 class="card-title font-weight-bold">$49/month</h2>
              <hr />
              <p class="card-text">
              <ul class="list-unstyled my-4 text-small text-left">
                <li class="mb-2">
                  <i class="fa fa-check mr-2 text-small"></i>  Unlimited users</li>
                <li class="mb-2">
                <i class="fa fa-check mr-2 text-small"></i>   50GB Storage</li>
                <li class="mb-2">
                <i class="fa fa-check mr-2 text-small"></i>   unlimited Public Projects</li>
                <li class="mb-2">
                <i class="fa fa-check mr-2 text-small"></i>   Community Access</li>
                <li class="mb-2">
                <i class="fa fa-check mr-2 text-small"></i>Unlimited Private Projects</li>
                <li class="mb-2">
                <i class="fa fa-check mr-2 text-small"></i>   Dedicated Phone Suport</li>
                <li class="mb-2">
                <i class="fa fa-check mr-2 text-small"></i>   Free Subdomain</li>
                <li class="mb-2">
                <i class="fa fa-check mr-2 text-small"></i>    Monthly Status Reports</li>
                </ul>
              </p>
              <a href="#" id="btn-button" class="btn btn-primary">
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Hello;
