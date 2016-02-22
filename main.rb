require "sinatra"
require "sendgrid-ruby"

get "/" do

    erb :index
end

get "/menu" do
    erb :menu
end

get "/about" do
    erb :about
end

get "/contact" do
    erb :contact
end

<<<<<<< HEAD
post "/contact" do
    
    client = SendGrid::Client.new(api_key: ENV["SENDGRID_APIKEY"])
   
    mail = SendGrid::Mail.new do |m|
        m.to = "alex.j.pujol@gmail.com"
        m.from = params[:email]
        m.subject = "Contact Us"
        m.text = params[:body]
        m.html = "<p style = 'color: red;'> #{params[:body]}</p>"
    end
    
    response = client.send(mail)
    
    if response.code == 200 
        "Thanks for your email. We may or may not respond."
        erb :thankyou
    else
        "NEIN NEIN NEIN! Your email has failed."
    end
end   
=======



>>>>>>> f865f67dc50d4a35f594d12d64e34e8feccf9beb
