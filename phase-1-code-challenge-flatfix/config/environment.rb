# require the Bundler module
require 'bundler/setup'

# require all gems defined in the Gemfile
Bundler.require

# require all files in the top-level app directory
require_rel '../app'
