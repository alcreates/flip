
class AppController < ApplicationController
  
  def index
    # response = RestClient::Request.execute(
    #   method: :get,
    #   url: 'http://api.openweathermap.org/data/2.5/weather?zip=10001,us&APPID=97ba0137a822f0aa0167956e1aa88b78'
    #   )
   
   
    # @tempData = JSON.parse(response)["list"][0]["main"]
  end
end
