require 'test_helper'

class HomepageControllerTest < ActionDispatch::IntegrationTest
  test "should get inde" do
    get homepage_inde_url
    assert_response :success
  end

end
